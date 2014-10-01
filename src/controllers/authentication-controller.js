codebrowser.controller.AuthenticationController = {

    authenticationView: new codebrowser.view.AuthenticationView(),

    authenticate: function () {

        codebrowser.controller.ViewController.push(this.authenticationView, true);
    }
}
