/* exported codebrowser */

/* DOM ready */

$(document).ready(function () {

    codebrowser.initialize();
});

/* App */

var codebrowser = {

    app: {},
    cache: {},
    helper: {},
    model: {},
    collection: {},
    view: {},
    controller: {},
    router: {},

    initialize: function () {

        // Oops! Catch all global unhandled errors
        window.onerror = function (error) {

            var errorView = new codebrowser.view.ErrorView({ model: { class: 'alert-danger', message: 'Oops! ' + error } });
            codebrowser.controller.ViewController.push(errorView, true);
        }

        // Initialise routers
        codebrowser.app.base = new codebrowser.router.BaseRouter();
        codebrowser.app.instance = new codebrowser.router.InstanceRouter();
        codebrowser.app.student = new codebrowser.router.StudentRouter();
        codebrowser.app.course = new codebrowser.router.CourseRouter();
        codebrowser.app.exercise = new codebrowser.router.ExerciseRouter();
        codebrowser.app.snapshot = new codebrowser.router.SnapshotRouter();

        // Register Handlebars partials
        Handlebars.registerPartial('search', Handlebars.templates.SearchContainer);
        Handlebars.registerPartial('snapshotNavigation', Handlebars.templates.SnapshotNavigationContainer);

        // History
        Backbone.history.start();
    },

    authenticate: function () {

        codebrowser.controller.AuthenticationController.authenticate();
    }
}
