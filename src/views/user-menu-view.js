codebrowser.view.UserMenuView = Backbone.View.extend({

    template: Handlebars.templates.UserMenuContainer,

    events: {

        'click [data-action="logout"]': 'logout'

    },

    /* Render */

    render: function () {

        var attributes = {

            username: localStorage.getItem(config.storage.authentication.username)

        }

        // Template
        var output = $(this.template(attributes));

        this.$el.html(output);
    },

    /* Update */

    update: function () {

        this.render();
    },

    /* Actions */

    logout: function () {

        codebrowser.controller.AuthenticationController.logout();
    }
});
