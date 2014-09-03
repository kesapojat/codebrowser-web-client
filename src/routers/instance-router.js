codebrowser.router.InstanceRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'instances(/)': 'instances'

    },

    /* Initialise */

    initialize: function () {

        this.instanceView = new codebrowser.view.InstancesView();
    },

    /* Actions */

    instances: function () {

        var self = this;

        this.instanceView.collection = new codebrowser.collection.InstanceCollection();

        this.fetchModel(this.instanceView.collection, true, function () {

            self.instanceView.render();
            codebrowser.controller.ViewController.push(self.instanceView);
        });
    }
});
