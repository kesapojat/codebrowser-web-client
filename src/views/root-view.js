codebrowser.view.RootView = codebrowser.view.ListBaseView.extend({

    id: 'root-container',
    template: Handlebars.templates.RootContainer,

    /* Render */

    renderTemplate: function () {

        // View attributes
        var attributes = {

            query: this.query,
            instances: this.collection.toJSON()

        }

        // Template
        return this.template(attributes);
    }
});
