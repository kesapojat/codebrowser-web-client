codebrowser.router.InstanceRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        ':instanceId(/)': 'instance'

    },

    /* Initialise */

    initialize: function () {

        this.instanceView = new codebrowser.view.InstanceView();

    },

    /* Actions */

    instance: function (instanceId) {

        this.instanceView.instanceId = instanceId;
        this.instanceView.render();

        codebrowser.controller.ViewController.push(this.instanceView);
    }
});
