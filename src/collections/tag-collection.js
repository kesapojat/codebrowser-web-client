/*
 * Fetch tags by passing a studentId, courseId and exerciseId as options for the collection:
 *
 * var tags = new codebrowser.collection.TagCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
 */

codebrowser.collection.TagCollection = Backbone.Collection.extend({

    model: codebrowser.model.Tag,

    url: function () {

        if (!this.instanceId || !this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Options instanceId, studentId, courseId and exerciseId are required to fetch tags.');
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

    initialize: function (models, options) {

        if (options) {
            this.instanceId = options.instanceId;
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    }
});
