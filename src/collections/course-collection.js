/*
 * Fetch all courses:
 *
 * var courses = new codebrowser.collection.CourseCollection();
 *
 * Fetch courses related to a student by passing an instanceId and a studentId as an option for the collection:
 *
 * var courses = new codebrowser.collection.CourseCollection(null, { instanceId: 1, studentId: 2 });
 */

codebrowser.collection.CourseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Course,

    url: function () {

        /* Fetch courses related to a student */
        if (this.studentId) {
            return config.api.main.root + this.instanceId + '/students/' + this.studentId + '/courses';
        }

        /* Fetch all courses */
        return config.api.main.root + this.instanceId + '/courses';
    },

    initialize: function (models, options) {

        if (options) {
            this.instanceId = options.instanceId;
            this.studentId = options.studentId;
        }
    }
});
