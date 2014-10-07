codebrowser.controller.AuthenticationController = {

    authenticationView: new codebrowser.view.AuthenticationView(),
    authenticated: false,

    credentials: function () {

        return { password: localStorage.getItem(config.storage.authentication.token) };
    },

    authenticate: function () {

        codebrowser.controller.ViewController.push(this.authenticationView, true);
    },

    login: function (username, password) {

        if (this.authenticated) {
            return;
        }

        var self = this;

        $.ajax({

            url: config.api.main.root,
            async: false,

            beforeSend: function (request) {

                request.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' + password));
            },

            success: function (data, status, request) {

                // Save token
                localStorage.setItem(config.storage.authentication.token, request.getResponseHeader('X-Authentication-Token'));
                self.authenticated = true;

                // Refresh
                Backbone.history.loadUrl();
            },

            error: function () {

                self.authenticationView.error('Wrong username or password.');
                return;
            }
        });
    }
}
