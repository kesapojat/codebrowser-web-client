/*
 * Fetch a snapshot by passing an instanceId, studentId, courseId and exerciseId as attributes for the model:
 *
 * var snapshot = codebrowser.model.Snapshot.findOrCreate({ instanceId: 1, studentId: 2, courseId: 3, exerciseId: 4, id: 5 });
 */

codebrowser.model.Snapshot = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.get('instanceId') || !this.get('studentId') || !this.get('courseId') || !this.get('exerciseId')) {
            throw new Error('Attributes instanceId, studentId, courseId and exerciseId are required to fetch a snapshot.');
        }

        return config.api.main.root +
               this.get('instanceId') +
               '/students/' +
               this.get('studentId') +
               '/courses/' +
               this.get('courseId') +
               '/exercises/' +
               this.get('exerciseId') +
               '/snapshots';
    },

    relations: [

        {
            type: Backbone.HasMany,
            key: 'files',
            relatedModel: 'codebrowser.model.File',
            collectionType: 'codebrowser.collection.FileCollection',
            reverseRelation: {

                key: 'snapshot'

            }
        }
    ],

    initialize: function () {

        // If fetched through a collection, get IDs from the collection
        if (this.collection) {
            this.set('instanceId', this.collection.instanceId);
            this.set('studentId', this.collection.studentId);
            this.set('courseId', this.collection.courseId);
            this.set('exerciseId', this.collection.exerciseId);
        }
    },

    getFiles: function () {

        var files = {};

        // Builds a folder structure for files
        this.get('files').each(function (file) {

            var folder = file.getFolder();

            if (!files[folder]) {
                files[folder] = [];
            }

            files[folder].push(file.toJSON());
        });

        return files;
    }
});
