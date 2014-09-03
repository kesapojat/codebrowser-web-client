codebrowser.router.InstanceRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'instances(/)':   'instances',
        ':instanceId(/)': 'instance'

    },

    /* Initialise */

    initialize: function () {

        this.instancesView = new codebrowser.view.InstancesView();
        this.instanceView = new codebrowser.view.InstanceView();

    },

    /* Actions */

    instances: function () {

        var self = this;

        this.instancesView.collection = new codebrowser.collection.InstanceCollection();

        this.fetchModel(this.instancesView.collection, true, function () {

            self.instancesView.render();
            codebrowser.controller.ViewController.push(self.instancesView);
        });
    },

    instance: function (instanceId) {

        this.instanceView.instanceId = instanceId;

        this.instanceView.render();
        codebrowser.controller.ViewController.push(this.instanceView);
    }
});
