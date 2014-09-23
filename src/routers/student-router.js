codebrowser.router.StudentRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        ':instanceId/students(/)':                                         'students',
        ':instanceId/courses/:courseId/exercises/:exerciseId(/)':          'navigation',
        ':instanceId/courses/:courseId/exercises/:exerciseId/students(/)': 'exerciseStudents'

    },

    /* Initialise */

    initialize: function () {

        codebrowser.router.BaseRouter.prototype.initialize();
        this.studentView = new codebrowser.view.StudentsView();
    },

    /* Actions */

    navigation: function (instanceId, courseId, exerciseId) {

        codebrowser.app.student.navigate('#/' +
                                         instanceId +
                                         '/courses/' +
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

            options.instanceId = instanceId;

            var courseFetched = _.after(1, function () {

                var exercise = codebrowser.model.Exercise.findOrCreate({ id: options.exerciseId });

                // Fetch exercise
                self.fetchModel(exercise, true, function () {

                    self.studentView.exercise = exercise;
                    fetchSynced();
                });
            });

            var course = codebrowser.model.Course.findOrCreate({ instanceId: instanceId, id: options.courseId });

            // Fetch course
            this.fetchModel(course, true, function () {

                self.studentView.course = course;
                self.studentView.exercise = null;
                courseFetched();
                fetchSynced();
            });

        } else {

            options = { instanceId: instanceId };

            self.studentView.course = null;
            self.studentView.exercise = null;
            fetchSynced();
            fetchSynced();
        }

        var studentCollection = new codebrowser.collection.StudentCollection(null, options);

        this.studentView.collection = studentCollection;

        // Fetch student collection
        this.fetchModel(studentCollection, true, fetchSynced);
    }
});
