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
               this.get('snapshot').id +
               '/files';
    },

    getContent: function () {

        var zip = codebrowser.cache.files,
            content = this.content,
            ignoreEmptyLines = localStorage.getItem(config.storage.setting.editor.ignoreEmptyLines);

        // Files.zip
        if (zip) {

            var file = zip.folder(this.get('snapshot').id).file(this.id);

            // File is present
            if (file) {
                content = file.asText();
            }
        }

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

        return this.get('path').substring(0, this.get('path').lastIndexOf('/'));
    }
});
