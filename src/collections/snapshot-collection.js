/*
 * Fetch snapshots by passing a studentId, courseId and exerciseId as options for the collection:
 *
 * var snapshots = new codebrowser.collection.SnapshotCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
 */

codebrowser.collection.SnapshotCollection = Backbone.Collection.extend({

    model: codebrowser.model.Snapshot,
    level: 'code',

    /* Differences */

    differencesDone: false,
    differences: [],

    url: function () {

        if (!this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Options studentId, courseId and exerciseId are required to fetch snapshots.');
        }

        return config.api.main.root +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/snapshots';
    },

    initialize: function (models, options) {

        if (options) {
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

    fetchFiles: function (callback) {

        var self = this,
            parameter = this.level ? '?level=' + this.level : '';

        // Files in cache
        if (codebrowser.cache.files && localStorage.getItem(config.storage.cache.files.url) === this.url() + parameter) {
            callback();
            return;
        }

        // Fetch new ZIP, need to calculate differences again
        this.differences = [];

        JSZipUtils.getBinaryContent(this.url() + '/files.zip' + parameter, function (error, data) {

            if (error) {
                callback(error);
                return;
            }

            var zip = new JSZip(data);

            // Cache URL
            localStorage.setItem(config.storage.cache.files.url, self.url() + parameter);
            localStorage.setItem(config.storage.cache.snapshot.level, self.level);

            // Save ZIP
            codebrowser.cache.files = zip;

            callback();
        });
    },

    getDuration: function (fromIndex, toIndex) {

        return this.at(fromIndex).get('timestamp') - this.at(toIndex).get('timestamp');
    },

    getMinDuration: function () {

        var self = this;

        var min = Number.MAX_VALUE;

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

        var self = this;

        var max = Number.MIN_VALUE;

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

    getDifference: function (index, filename) {

        var difference = this.differences[index];

        if (!difference) {
            return null;
        }

        if (!difference[filename]) {
            return null;
        }

        return difference[filename];
    },

    getDifferences: function () {

        if (this.differences.length !== 0) {
            return this.differences;
        }

        this.differences = [];

        var self = this;

        this.each(function (snapshot, index) {

            var previousSnapshot = self.at(index - 1);

            // Divide diffs by snapshot indexes
            if (!self.differences[index]) {

                self.differences[index] = {

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

                var currentFile = file;
                var previousFile = null;

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
        });

        return self.differences;
    }
});
