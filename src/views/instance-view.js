codebrowser.view.InstanceView = codebrowser.view.ListBaseView.extend({

    id: 'instance-container',
    template: Handlebars.templates.InstanceContainer,

    /* Render */

    renderTemplate: function () {

        return this.template({ instance: this.instance.toJSON() });
    }
});
