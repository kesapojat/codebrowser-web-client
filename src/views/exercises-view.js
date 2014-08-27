codebrowser.view.ExercisesView = codebrowser.view.ListBaseView.extend({

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
    }
});
