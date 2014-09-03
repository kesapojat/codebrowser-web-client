codebrowser.router.StudentRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        ':instanceId/students(/)':                                                    'students',
        ':instanceId/courses/:courseId/exercises/:exerciseId(/)':                     'navigation',
        ':instanceId/courses/:courseId/exercises/:exerciseId/students(/)':            'exerciseStudents'

    },

    /* Initialise */

    initialize: function () {

        this.studentView = new codebrowser.view.StudentsView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    navigation: function (instanceId, courseId, exerciseId) {

        codebrowser.app.student.navigate('#/' +
                                         instanceId +
                                         'courses/' +
                                         courseId +
                                         '/exercises/' +
                                         exerciseId +
                                         '/students', { replace: true });

    },

    exerciseStudents: function (instanceId, courseId, exerciseId) {

        this.students(instanceId, { courseId: courseId, exerciseId: exerciseId });

    },

    students: function (instanceId, options) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(3, function () {

            self.studentView.render();
            codebrowser.controller.ViewController.push(self.studentView);
        });

        if (options) {

            var courseFetched = _.after(1, function () {

                var exercise = codebrowser.model.Exercise.findOrCreate({ id: options.exerciseId });

                // Fetch exercise
                self.fetchModel(exercise, true, function () {

                    self.studentView.exercise = exercise;
                    fetchSynced();
                });
            });

            var course = codebrowser.model.Course.findOrCreate({ id: options.courseId, instanceId: instanceId });

            // Fetch course
            this.fetchModel(course, true, function () {

                self.studentView.course = course;
                self.studentView.exercise = null;
                courseFetched();
                fetchSynced();
            });

        } else {

            self.studentView.course = null;
            self.studentView.exercise = null;
            fetchSynced();
            fetchSynced();
        }

        var studentCollection = new codebrowser.collection.StudentCollection(null, { instanceId: instanceId });

        this.studentView.collection = studentCollection;

        // Fetch student collection
        this.fetchModel(studentCollection, true, fetchSynced);
    }
});
