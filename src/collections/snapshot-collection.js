/*
 * Fetch snapshots by passing an instanceId, studentId, courseId and exerciseId as options for the collection:
 *
 * var snapshots = new codebrowser.collection.SnapshotCollection(null, { instanceId: 1, studentId: 2, courseId: 3, exerciseId: 4 });
 */

codebrowser.collection.SnapshotCollection = Backbone.Collection.extend({

    model: codebrowser.model.Snapshot,
    level: 'code',
    count: 100,
    offset: 1,

    /* Differences */

    differencesDone: false,
    differences: [],

    url: function () {

        if (!this.instanceId || !this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Options instanceId, studentId, courseId and exerciseId are required to fetch snapshots.');
        }

        return config.api.main.root +
               this.instanceId +
               '/students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/snapshots';
    },

    initialize: function (models, options) {

        if (options) {
            this.instanceId = options.instanceId;
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    },

    isCodeLevel: function () {

        return this.level === 'code';
    },

    isKeyLevel: function () {

        return this.level === 'key';
    },

    fetchZip: function (callback, id) {

        // Snapshot
        var snapshot = this.get(id) || this.at(0);

        snapshot = this.at(this.indexOf(snapshot) - this.offset) || this.at(0);

        // Indexes
        var current = this.indexOf(snapshot),
            from = this.indexOf(this.get(localStorage.getItem(config.storage.cache.snapshot.from)));

        // Id
        id = snapshot.get('id');

        if (current - from < 0 || current === this.length - 1 - this.offset) {
            snapshot = this.at(current - this.count + this.offset + 1) || this.at(0);
            id = snapshot.get('id');
        }

        var url = localStorage.getItem(config.storage.cache.files.url),
            parameters = (this.level ? '?level=' + this.level : '') + '&from=' + id + '&count=' + this.count;

        var levelParameter = parameters.substring(0, parameters.indexOf('&from'));

        // Files in cache
        if (codebrowser.cache.files && url === this.url() + levelParameter) {

            if (current - from < this.count - this.offset && current - from >= 0) {
                callback();
                return;
            }

        } else {

            // Calculate differences again if different url
            this.differences = [];
        }

        this.fetchFiles(parameters, levelParameter, id, callback);
    },

    fetchFiles: function (parameters, levelParameter, id, callback) {

        var self = this;

        $.ajax({

            url: this.url() + '/files.zip' + parameters,
            async: false,

            beforeSend: function (xhr) {

                if ('responseType' in xhr) {
                    xhr.responseType = 'arraybuffer';
                }

                xhr.overrideMimeType('text/plain; charset=x-user-defined');
                codebrowser.controller.AuthenticationController.setCredentials(xhr);
            },

            success: function (data, status, xhr) {

                var file, error;

                try {
                    file = JSZipUtils._getBinaryFromXHR(xhr);
                } catch (e) {
                    error = new Error(e);
                }

                self.getBinaryContent(file, error, callback, levelParameter, id);
            },

            error: function (data) {

                console.log(data);
            }
        });
    },

    getBinaryContent: function (zipData, error, callback, levelParameter, id) {

        if (error) {
            callback(error);
            return;
        }

        var zip = new JSZip(zipData);

        // Cache URL, snapshot level, 'from' snapshot
        localStorage.setItem(config.storage.cache.files.url, this.url() + levelParameter);
        localStorage.setItem(config.storage.cache.snapshot.level, this.level);
        localStorage.setItem(config.storage.cache.snapshot.from, id);

        // Save ZIP
        codebrowser.cache.files = zip;

        callback();
    },

    getDuration: function (fromIndex, toIndex) {

        return this.at(fromIndex).get('timestamp') - this.at(toIndex).get('timestamp');
    },

    getMinDuration: function () {

        var self = this,
            min = Number.MAX_VALUE;

        // Find min duration
        this.each(function (snapshot, index) {

            if (index === 0) {
                return;
            }

            var duration = self.getDuration(index, index - 1);

            // Found new min
            if (duration < min) {
                min = duration;
            }
        });

        return min;
    },

    getMaxDuration: function () {

        var self = this,
            max = Number.MIN_VALUE;

        // Find max duration
        this.each(function (snapshot, index) {

            if (index === 0) {
                return;
            }

            var duration = self.getDuration(index, index - 1);

            // Found new max
            if (duration > max) {
                max = duration;
            }
        });

        return max;
    },

    getDifference: function (index) {

        var previous = this.at(index - 1),
            current = this.at(index);

        if (!previous && !current) {
            return null;
        }

        this.fileDifferences(previous, current, index);

        return this.differences[index];
    },

    getDifferences: function () {

        if (this.isKeyLevel()) {
            return;
        }

        if (this.differences.length !== 0) {
            return this.differences;
        }

        this.differences = [];

        var self = this;

        this.each(function (snapshot, index) {

            var previousSnapshot = self.at(index - 1);

            self.fileDifferences(previousSnapshot, snapshot, index);
        });

        return this.differences;
    },

    fileDifferences: function (previousSnapshot, snapshot, index) {

        var self = this;

        // Divide diffs by snapshot indexes
        if (!this.differences[index]) {

            this.differences[index] = {
                total: 0,
                lines: 0

            }
        }

        var files = snapshot.get('files');

        // Calculate differences for every file of each snapshot
        files.each(function (file) {

            var filename = file.get('name');

            // Create namespace for every file name
            if (!self.differences[index].filename) {
                self.differences[index][filename] = null;
            }

            var currentFile = file,
                previousFile = null;

            // If previous snapshot doesn't exist, current file doesn't have earlier version of it
            if (!previousSnapshot) {

                // Set previous file to current file
                previousFile = currentFile;

            } else {

                // Get previous version of the current file from the previous snapshot
                previousFile = previousSnapshot.get('files').findWhere({ name: filename });
            }

            // Couldn't find file from previous snapshot, set previous file to current file
            if (!previousFile) {
                previousFile = currentFile;
            }

            var previousContent = previousFile.getContent();

            // New file
            if (previousFile === currentFile) {
                previousContent = '';
            }

            // Create difference
            var difference = new codebrowser.model.Diff(previousContent, currentFile.getContent());

            // Count how many lines were in snapshot's files overall and how many lines of them changed
            self.differences[index].total += difference.getCount().total();
            self.differences[index].lines += currentFile.lines();

            self.differences[index][currentFile.get('name')] = difference;
        });
    }
});
