codebrowser.view.CoursesView = codebrowser.view.BaseView.extend({

    id: 'courses-container',
    template: Handlebars.templates.CoursesContainer,

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            studentId: this.collection.studentId,
            courses: this.collection.toJSON()

        }

        if (this.collection.studentId) {
            attributes = _.extend(attributes, { student: this.student.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);

        // Bind events also on re-render
        this.delegateEvents();
    }
});
