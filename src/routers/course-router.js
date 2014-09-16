codebrowser.router.CourseRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        ':instanceId/courses(/)':                     'courses',
        ':instanceId/students/:studentId(/)':         'navigation',
        ':instanceId/students/:studentId/courses(/)': 'courses'

    },

    /* Initialise */

    initialize: function () {

        this.courseView = new codebrowser.view.CoursesView();
    },

    /* Actions */

    navigation: function (instanceId, studentId) {

        codebrowser.app.course.navigate('#/' +
                                        instanceId +
                                        '/students/' +
                                        studentId +
                                        '/courses', { replace: true });
    },

    courses: function (instanceId, studentId) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(studentId ? 2 : 1, function () {

            self.courseView.render();
            codebrowser.controller.ViewController.push(self.courseView);
        });

        if (studentId) {

            var student = codebrowser.model.Student.findOrCreate({ instanceId: instanceId, id: studentId });

            // Fetch student
            this.fetchModel(student, true, function () {

                self.courseView.student = student;
                fetchSynced();
            });
        }

        var courseCollection = new codebrowser.collection.CourseCollection(null, { instanceId: instanceId, studentId: studentId });

        this.courseView.collection = courseCollection;

        // Fetch course collection
        this.fetchModel(courseCollection, true, fetchSynced);
    }
});
