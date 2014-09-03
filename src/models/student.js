codebrowser.model.Student = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.api.main.root + this.get('instanceId') + '/students'
    },

    initialize: function (options) {

        if (options) {
            this.instanceId = options.instanceId;
        }
    }
});
