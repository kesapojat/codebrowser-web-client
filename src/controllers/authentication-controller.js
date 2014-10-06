codebrowser.controller.AuthenticationController = {

    authenticationView: new codebrowser.view.AuthenticationView(),

    authenticate: function () {

        codebrowser.controller.ViewController.push(this.authenticationView, true);
    },

    saveToken: function (xhr) {

        if (!xhr) {
            return;
        }

        localStorage.setItem(config.storage.authentication.token, xhr.getResponseHeader('X-Authentication-Token'));
    }
}
