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

    credentials: function (options) {

        var username = options ? options.username : '';
        var token = localStorage.getItem(config.storage.authentication.token) || (options ? options.password : null);

        if (!token) {
            return;
        }

        return {

            username: username,
            password: token

        }
    },

    process: function (options) {

        if (this.authenticated) {
            return;
        }

        this.saveToken(options.xhr);

        var path = localStorage.getItem(config.storage.authentication.path);

        if (!path) {
            return;
        }

        Backbone.history.navigate('#' + path, { trigger: true });

        this.authenticated = true;
        localStorage.removeItem(config.storage.authentication.path);
    }
}
