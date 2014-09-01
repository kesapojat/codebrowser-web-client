/*
 * A file is resolved through a snapshot.
 */

codebrowser.model.File = Backbone.RelationalModel.extend({

    content: '',

    urlRoot: function () {

        return config.api.main.root +
               'students/' +
               this.get('snapshot').get('studentId') +
               '/courses/' +
               this.get('snapshot').get('courseId') +
               '/exercises/' +
               this.get('snapshot').get('exerciseId') +
               '/snapshots/' +
               this.get('snapshot') +
               '/files';
    },

    getContent: function () {

        var ignoreEmptyLines = localStorage.getItem(config.storage.setting.editor.ignoreEmptyLines);
        var content = this.content;

        // Standardise line endings
        content = content.replace(/\r\n|\r/g, '\n');

        // Convert tabs to 4 spaces
        content = content.replace(/\t/g, '    ');

        // Trim empty lines
        if (ignoreEmptyLines && ignoreEmptyLines === 'true') {
            content = content.replace(/^ +$/gm, '');
        }

        return content;
    },

    lines: function () {

        return this.getContent().split('\n').length;
    },

    getFolder: function () {

        return this.get('name').substring(0, this.get('name').lastIndexOf('/'));
    },

    getName: function () {

        return _.last(this.get('name').split('/'));
    },

    /* Callback parameters (content, [error]) are the received data and possible error, respectively. */

    fetchContent: function (callback) {

        var zip = codebrowser.cache.files,
            file = zip.folder(this.get('snapshot').id).file(this.id);

        this.content = file.asText();

        callback(this.getContent, null);
    }
});
