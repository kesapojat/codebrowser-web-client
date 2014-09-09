codebrowser.view.LoadingView = Backbone.View.extend({

    id: 'loading-container',
    template: Handlebars.templates.Loading,

    /* Render */

    render: function () {

        this.$el.html(this.template());
    }
});
