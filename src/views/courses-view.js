codebrowser.view.CoursesView = codebrowser.view.BaseView.extend({

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
