codebrowser.collection.InstanceCollection = Backbone.Collection.extend({

    model: codebrowser.model.Instance,

    url: function () {

        return config.api.main.root + 'instances';
    }
});
