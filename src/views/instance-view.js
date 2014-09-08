codebrowser.view.InstanceView = codebrowser.view.ListBaseView.extend({

    id: 'instance-container',
    template: Handlebars.templates.InstanceContainer,

    /* Render */

    renderTemplate: function () {

        // View attributes
        var attributes = {

            instance: this.instance.toJSON()

        }

        // Template
        return this.template(attributes);
    }
});
