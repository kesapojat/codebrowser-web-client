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
    },

    /* Actions */

    authenticate: function () {

        console.log('Username: ' + $('[data-id="username"]', this.$el).val());
        console.log('Password: ' + $('[data-id="password"]', this.$el).val());
    }
});
