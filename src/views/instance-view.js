codebrowser.view.InstancesView = codebrowser.view.ListBaseView.extend({

    id: 'instances-container',
    template: Handlebars.templates.InstancesContainer,

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
