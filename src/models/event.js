codebrowser.model.Event = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.get('exercise')) {
            return codebrowser.model.Exercise.findOrCreate({ id: this.exerciseId }).url() +  '/events';
        }

        return this.get('exercise').url() + '/events';
    },

    initialize: function (options) {

        if (options) {
            this.exerciseId = options.exerciseId;
        }

        // Name
        var eventName = this.get('eventType').split('_')[1];
        this.set('name', eventName.charAt(0).toUpperCase() + eventName.slice(1));
    }
});
