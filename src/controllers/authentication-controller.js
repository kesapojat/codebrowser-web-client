codebrowser.controller.AuthenticationController = {

    authenticationView: new codebrowser.view.AuthenticationView(),
    view: null,

    authenticate: function (path) {

        this.authenticationView.path = path;

        codebrowser.controller.ViewController.push(this.authenticationView, true);

    }

};
