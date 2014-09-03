codebrowser.view.InstanceView = codebrowser.view.ListBaseView.extend({

    id: 'instance-container',
    template: Handlebars.templates.InstanceContainer,

    /* Render */

    renderTemplate: function () {

        // View attributes
        var attributes = {

            instanceId: this.instanceId

        }

        // Template
        return this.template(attributes);
    }
});
