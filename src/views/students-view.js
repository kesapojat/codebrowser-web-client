codebrowser.view.StudentsView = codebrowser.view.BaseView.extend({

    id: 'students-container',
    template: Handlebars.templates.StudentsContainer,

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            students: this.collection.toJSON()

        }

        if (this.course && this.exercise) {
            attributes = _.extend(attributes, { course: this.course.toJSON(), exercise: this.exercise.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);

        // Bind events also on re-render
        this.delegateEvents();
    }
});
