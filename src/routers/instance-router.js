codebrowser.router.InstanceRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'instances(/)': 'instances',

    },

    /* Initialise */

    initialize: function () {

        this.instanceView = new codebrowser.view.InstancesView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    instances: function () {

        var self = this;

        var instanceCollection = new codebrowser.collection.InstanceCollection();

        this.instanceView.collection = instanceCollection;

        this.fetchModel(instanceCollection, true, function () {

            self.instanceView.render();
            codebrowser.controller.ViewController.push(self.instanceView);
        });

    }
});
