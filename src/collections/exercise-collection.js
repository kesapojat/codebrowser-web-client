/*
 * Fetch all exercises related to a course:
 *
 * var course = codebrowser.model.Course.findOrCreate({ instanceId: 1, id: 2 });
 * var exercises = new codebrowser.collection.ExerciseCollection();
 * exercises.course = course;
 *
 * Fetch exercises related to a student and course by passing an instanceId, studentId and courseId as options for the collection:
 *
 * var courses = new codebrowser.collection.ExerciesCollection(null, { instanceId: 1, studentId: 2, courseId: 3 });
 */

codebrowser.collection.ExerciseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Exercise,

    url: function () {

        if (!this.instanceId || !this.courseId) {
            throw new Error('Options instanceId and courseId are required to fetch exercises.');
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
