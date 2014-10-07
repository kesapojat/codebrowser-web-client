codebrowser.view.AuthenticationView = Backbone.View.extend({

    id: 'authentication-container',
    template: Handlebars.templates.Authentication,

    events: {

        'click [data-action="authenticate"]': 'authenticate'

    },

    /* Render */

    render: function (message) {

        this.$el.html(this.template({ message: message }));
        this.$el.children('#authentication-modal').modal();

        // Bind events also on re-render
        this.delegateEvents();
    },

    /* Actions */

    error: function (message) {

        this.render(message);
    },

    authenticate: function () {

        var username = $('[data-id="username"]', this.$el).val(),
            password = $('[data-id="password"]', this.$el).val();

        codebrowser.controller.AuthenticationController.login(username, password);
    }
});
