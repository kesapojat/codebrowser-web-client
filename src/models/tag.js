/*
 * Fetch a tag by passing an instanceId, studentId, courseId and exerciseId as options for the model:
 *
 * var tag = codebrowser.model.Tag.findOrCreate({ id: 4 }, { instanceId: 1, studentId: 2, courseId: 3, exerciseId: 4 });
 *
 * Create a new tag the same way:
 *
 * var tag = new codebrowser.model.Tag({ text: 'Tag' }, { instanceId: 1, studentId: 2, courseId: 3, exerciseId: 4 });
 */

codebrowser.model.Tag = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.instanceId || !this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Attributes instanceId, studentId, courseId and exerciseId are required to fetch a tag.');
        }

        return config.api.main.root +
               this.instanceId +
               '/students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/tags';
    },

    initialize: function (attributes, options) {

        if (options) {
            this.instanceId = options.instanceId;
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }

        // If fetched through a collection, get IDs from the collection
        if (this.collection) {
            this.instanceId = this.collection.instanceId;
            this.studentId = this.collection.studentId;
            this.courseId = this.collection.courseId;
            this.exerciseId = this.collection.exerciseId;
        }
    }
});
