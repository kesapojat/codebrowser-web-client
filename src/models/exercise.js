/*
 * An exercise is resolved through a course.
 */

codebrowser.model.Exercise = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.get('course')) {
            return codebrowser.model.Course.findOrCreate({ id: this.courseId }).url() +  '/exercises';
        }

        return this.get('course').url() + '/exercises';
    },

    initialize: function (options) {

        if (options) {
            this.id = options.id;
            this.courseId = options.courseId;
        }
    }
});
