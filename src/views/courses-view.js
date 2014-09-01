codebrowser.view.CoursesView = codebrowser.view.ListBaseView.extend({

    id: 'courses-container',
    template: Handlebars.templates.CoursesContainer,

    /* Render */

    renderTemplate: function () {

        // View attributes
        var attributes = {

            query: this.query,
            studentId: this.collection.studentId,
            courses: this.collection.toJSON()

        }

        if (this.collection.studentId) {
            attributes = _.extend(attributes, { student: this.student.toJSON() });
        }

        // Template
        return this.template(attributes);
    }
});
