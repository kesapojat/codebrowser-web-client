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

    refresh: function () {

        // Render username
        $('[data-id="username"]').html(localStorage.getItem(config.storage.authentication.username));

        // Bind events
        $('[data-action="logout"]').click($.proxy(codebrowser.controller.AuthenticationController.logout, this));
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

                // Refresh
                self.refresh();
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

        // Invalidate
        localStorage.removeItem(config.storage.authentication.username);
        localStorage.removeItem(config.storage.authentication.token);
        this.authenticated = false;

        // Remove Backbone cache
        localStorage.removeItem(Backbone.fetchCache.getLocalStorageKey());

        this.refresh();
        codebrowser.authenticate();
    }
}
