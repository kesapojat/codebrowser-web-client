codebrowser.view.AuthenticationView = Backbone.View.extend({

    id: 'authentication-container',
    template: Handlebars.templates.Authentication,

    events: {

        'click [data-action="authenticate"]': 'authenticate',
        'keydown':                            'keydown'

    },

    /* Render */

    render: function (message) {

        this.$el.html(this.template({ message: message }));
        this.$el.children('#authentication-modal').modal();

        // Bind events also on re-render
        this.delegateEvents();
    },

    /* Events */

    keydown: function (event) {

        // Enter
        if (event.keyCode === 13) {
            this.authenticate();
        }
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
