/*
 * Fetch all exercises related to a course:
 *
 * var course = codebrowser.model.Course.findOrCreate({ id: 1 });
 * var exercises = new codebrowser.collection.ExerciseCollection();
 * exercises.course = course;
 *
 * Fetch exercises related to a student and course by passing a studentId and courseId as options for the collection:
 *
 * var courses = new codebrowser.collection.ExerciesCollection(null, { studentId: 1, courseId: 2 });
 */

codebrowser.collection.ExerciseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Exercise,

    url: function () {

        if (!this.courseId) {
            throw new Error('Option courseId is required to fetch exercises.');
        }

        /* Fetch exercises related to a course */
        if (!this.studentId) {
            return config.api.main.root + this.instanceId + '/courses/' + this.courseId + '/exercises';
        }

        /* Fetch exercises related to a student and course */
        return config.api.main.root + this.instanceId + '/students/' + this.studentId + '/courses/' + this.courseId + '/exercises';
    },

    initialize: function (models, options) {

        if (options) {
            this.instanceId = options.instanceId;
            this.studentId = options.studentId;
            this.courseId = options.courseId;
        }
    }
});
