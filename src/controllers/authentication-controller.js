codebrowser.controller.AuthenticationController = {

    authenticated: false,
    authenticationView: new codebrowser.view.AuthenticationView(),

    authenticate: function () {

        codebrowser.controller.ViewController.push(this.authenticationView, true);
    },

    saveToken: function (xhr) {

        if (!xhr) {
            return;
        }

        localStorage.setItem(config.storage.authentication.token, xhr.getResponseHeader('X-Authentication-Token'));
    },

    finish: function () {

        var path = localStorage.getItem(config.storage.authentication.path);

        Backbone.history.navigate('#' + path, { trigger: true });

        this.authenticated = true;
        localStorage.removeItem(config.storage.authentication.path);
    }
}
