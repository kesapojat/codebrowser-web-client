codebrowser.controller.AuthenticationController = {

    authenticated: false,
    authenticationView: new codebrowser.view.AuthenticationView(),
    token: null,

    authenticate: function (message) {

        this.authenticationView.message = message;

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
            beforeSend: function (xhr) {

                xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' + password));
            },

            success: function (data, status, xhr) {

                // Save token
                self.token = xhr.getResponseHeader('X-Authentication-Token');
                self.authenticated = true;

                var path = localStorage.getItem(config.storage.authentication.path);

                if (!path) {
                    return;
                }

                localStorage.removeItem(config.storage.authentication.path);

                // Refresh page
                Backbone.history.loadUrl();
            },

            error: function (data) {

                codebrowser.app.base.notAuthenticated(data.responseJSON.path);
                return;
            }
        });
    },

    credentials: function () {

        return { password: this.token };
    }
}
