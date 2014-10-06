codebrowser.router.BaseRouter = Backbone.Router.extend({

    loadingView: new codebrowser.view.LoadingView(),

    routes: {

        '':          'root',
        '*notFound': 'notFound'

    },

    /* Initialise */

    initialize: function () {

        this.rootView = new codebrowser.view.RootView();
        this.notFoundView = new codebrowser.view.NotFoundErrorView();
    },

    /* Actions */

    root: function (options) {

        var self = this;

        this.rootView.collection = new codebrowser.collection.InstanceCollection();

        this.fetchModel(this.rootView.collection, true, function () {

            self.rootView.render();
            codebrowser.controller.ViewController.push(self.rootView);
        }, options);
    },

    notFound: function (message) {

        this.notFoundView.model.message = message || 'Not found.';

        codebrowser.controller.ViewController.push(this.notFoundView, true);
    },

    notAuthenticated: function (path) {

        // Remember path
        localStorage.setItem(config.storage.authentication.path, path);

        throw new codebrowser.model.AuthorisationError();
    },

    authentication: function (options) {

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

    fetchModel: function (model, useCache, onSuccess, options) {

        var self = this;

        model.on('request', function () {

            // Loading
            codebrowser.controller.ViewController.push(self.loadingView, true);
        });

        model.credentials = this.authentication(options);

        model.fetch({

            traditional: true,
            data: (options && !options.username) ? options : '',
            cache: useCache,
            expires: useCache ? config.cache.expires : 0,

            success: function (model, response, options) {

                if (!codebrowser.controller.AuthenticationController.authenticated) {
                    codebrowser.controller.AuthenticationController.saveToken(options.xhr);
                    codebrowser.controller.AuthenticationController.finish();
                    return;
                }

                onSuccess(model, response, options);
            },

            error: function (model, response) {

                if (response.status === 401) {
                    self.notAuthenticated(response.responseJSON.path);
                }

                self.notFound();
            }
        });
    }
});
