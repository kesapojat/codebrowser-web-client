codebrowser.controller.AuthenticationController = {

    authenticationView: new codebrowser.view.AuthenticationView(),
    authenticated: false,

    setCredentials: function (request) {

        if (!localStorage.getItem(config.storage.authentication.token)) {
            return;
        }

        request.setRequestHeader('Authorization', 'Basic ' + btoa(':' + localStorage.getItem(config.storage.authentication.token)));
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

                // Initialise logout
                $('#logout-container').html((new codebrowser.view.LogoutView()).render().el);

                // Refresh
                Backbone.history.loadUrl();
            },

            error: function () {

                self.authenticationView.error('Wrong username or password.');
                return;
            }
        });
    },

    logout: function () {

        localStorage.removeItem(config.storage.authentication.token);
        this.authenticated = false;

        // Remove logout
        $('#logout-container').empty();

        codebrowser.authenticate();
        return;
    }
}
