codebrowser.view.AuthenticationView = Backbone.View.extend({

    id: 'authentication-container',
    template: Handlebars.templates.Authentication,

    events: {

        'click [data-action="authenticate"]': 'authenticate'

    },

    /* Render */

    render: function () {

        this.$el.html(this.template());
        this.$el.children('#authentication-modal').modal();

        // Bind events also on re-render
        this.delegateEvents();
    },

    /* Actions */

    authenticate: function () {

        var username = $('[data-id="username"]', this.$el).val(),
            password = $('[data-id="password"]', this.$el).val();

        codebrowser.app.base.root({ username: username, password: password });
    }
});
