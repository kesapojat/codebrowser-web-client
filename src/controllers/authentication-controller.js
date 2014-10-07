codebrowser.controller.AuthenticationController = {

    authenticationView: new codebrowser.view.AuthenticationView(),
    authenticated: false,
    token: null,

    credentials: function () {

        return { password: this.token };
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
                self.token = request.getResponseHeader('X-Authentication-Token');
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
