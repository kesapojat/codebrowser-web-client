codebrowser.view.LogoutView = Backbone.View.extend({

    template: Handlebars.templates.LogoutContainer,

    events: {

        'click #logout': 'logout'

    },

    /* Render */

    render: function () {

        // Template
        var output = this.template();

        this.$el.html(output);
        return this;
    },

    /* Events */

    logout: function () {

        codebrowser.controller.AuthenticationController.logout();
    }

});
