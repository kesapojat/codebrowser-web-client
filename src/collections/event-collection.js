/*
 * Fetch all events related to an exercise.
 *
 * Fetch events related to an exercise and student by passing an instanceId, studentId, courseId and exerciseId as options for the collection:
 *
 * var events = new codebrowser.collection.EventsCollection(null, { instanceId: 1, studentId: 2, courseId: 3, exerciseId: 4 });
 */

codebrowser.collection.EventCollection = Backbone.Collection.extend({

    model: codebrowser.model.Event,

    url: function () {

        if (!this.instanceId || !this.courseId || !this.studentId || !this.exerciseId) {
            throw new Error('Options instanceId, studentId, courseId and exerciseId are required to fetch events.');
        }

        /* Fetch events related to a student and course */
        return config.api.main.root +
               this.instanceId +
               '/students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/events';
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
