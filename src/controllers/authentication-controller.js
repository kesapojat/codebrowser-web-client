codebrowser.controller.AuthenticationController = {

    authenticationView: new codebrowser.view.AuthenticationView(),
    authenticated: false,

    /* Credentials */

    setCredentials: function (request) {

        if (!localStorage.getItem(config.storage.authentication.token)) {
            return;
        }

        request.setRequestHeader('Authorization', 'Basic ' + btoa(':' + localStorage.getItem(config.storage.authentication.token)));
    },

    clearCredentials: function () {

        // Invalidate
        localStorage.removeItem(config.storage.authentication.username);
        localStorage.removeItem(config.storage.authentication.token);
        this.authenticated = false;

        // Remove Backbone cache
        localStorage.removeItem(Backbone.fetchCache.getLocalStorageKey());

        // Update view controller
        codebrowser.controller.ViewController.update();
    },

    /* Actions */

    authenticate: function () {

        // Clear previous state
        this.clearCredentials();

        codebrowser.controller.ViewController.push(this.authenticationView, true);
    },

    login: function (username, password, callback) {

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

                // Save username
                localStorage.setItem(config.storage.authentication.username, username);

                // Save token
                localStorage.setItem(config.storage.authentication.token, request.getResponseHeader('X-Authentication-Token'));
                self.authenticated = true;

                // Update view controller
                codebrowser.controller.ViewController.update();

                // Reload
                Backbone.history.loadUrl();

                callback();
            },

            error: function () {

                self.authenticationView.error('Wrong username or password.');
                return;
            }
        });
    },

    logout: function () {

        this.clearCredentials();
        codebrowser.authenticate();
    }
}
