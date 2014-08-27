codebrowser.view.ExercisesView = codebrowser.view.BaseView.extend({

    id: 'exercises-container',
    template: Handlebars.templates.ExercisesContainer,

    /* Render */

    renderTemplate: function () {

        // View attributes
        var attributes = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            course: this.course.toJSON(),
            exercises: this.collection.toJSON()

        }

        if (this.student) {
            attributes = _.extend(attributes, { student: this.student.toJSON() });
        }

        // Template
        return this.template(attributes);
    },

    render: function () {

        // Template
        var output = this.renderTemplate();

        this.$el.html(output);

        // Bind events also on re-render
        this.delegateEvents();
    },

    update: function () {

        // Template
        var output = this.renderTemplate();

        var filteredList = $(output).find('table');

        this.$el.find('table').replaceWith(filteredList);
    }
});
