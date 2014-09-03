codebrowser.collection.StudentCollection = Backbone.Collection.extend({

    model: codebrowser.model.Student,

    url: function () {

        if (this.instanceId && this.courseId && this.exerciseId) {
            return config.api.main.root + this.instanceId + '/courses/' + this.courseId + '/exercises/' + this.exerciseId + '/students';
        }

        return config.api.main.root + this.instanceId + '/students';
    },

    initialize: function (models, options) {

        if (options) {
            this.instanceId = options.instanceId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    }
});
