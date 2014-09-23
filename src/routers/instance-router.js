codebrowser.router.InstanceRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        ':instanceId(/)': 'instance'

    },

    /* Initialise */

    initialize: function () {

        codebrowser.router.BaseRouter.prototype.initialize();
        this.instanceView = new codebrowser.view.InstanceView();
    },

    /* Actions */

    instance: function (instanceId) {

        var self = this,
            instance = codebrowser.model.Instance.findOrCreate({ id: instanceId });

        // Wait for fetch to be in sync
        var fetchSynced = _.after(1, function () {

            self.instanceView.render();
            codebrowser.controller.ViewController.push(self.instanceView);
        });

        // Fetch instance
        this.fetchModel(instance, true, function () {

            self.instanceView.instance = instance;
            fetchSynced();
        });
    }
});
