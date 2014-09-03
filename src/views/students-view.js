codebrowser.view.StudentsView = codebrowser.view.ListBaseView.extend({

    id: 'students-container',
    template: Handlebars.templates.StudentsContainer,

    /* Render */

    renderTemplate: function () {

        // View attributes
        var attributes = {

            query: this.query,
            students: this.collection.toJSON(),
            instanceId: this.collection.instanceId

        }

        if (this.course && this.exercise) {
            attributes = _.extend(attributes, { course: this.course.toJSON(), exercise: this.exercise.toJSON() });
        }

        // Template
        return this.template(attributes);
    }
});
