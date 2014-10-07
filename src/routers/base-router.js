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

    root: function () {

        var self = this;

        this.rootView.collection = new codebrowser.collection.InstanceCollection();

        this.fetchModel(this.rootView.collection, true, function () {

            self.rootView.render();
            codebrowser.controller.ViewController.push(self.rootView);
        });
    },

    notFound: function (message) {

        this.notFoundView.model.message = message || 'Not found.';

        codebrowser.controller.ViewController.push(this.notFoundView, true);
    },

    notAuthenticated: function (retry) {

        var authorisationError = new codebrowser.model.AuthorisationError();

        if (retry) {
            authorisationError.message = 'Incorrect username or password.';
        }

        try {
            throw authorisationError;
        } catch (error) {
            codebrowser.controller.AuthenticationController.authenticate(error.message);
        }
    },

    fetchModel: function (model, useCache, onSuccess, options) {

        var self = this;

        model.on('request', function () {

            // Loading
            codebrowser.controller.ViewController.push(self.loadingView, true);
        });

        model.credentials = codebrowser.controller.AuthenticationController.credentials();

        model.fetch({

            traditional: true,
            data: options ? options : '',
            cache: useCache,
            expires: useCache ? config.cache.expires : 0,

            success: function (model, response, options) {

                onSuccess(model, response, options);
            },

            error: function (model, response) {

                if (response.status === 401) {
                    self.notAuthenticated();
                    return;
                }

                self.notFound();
            }
        });
    }
});
