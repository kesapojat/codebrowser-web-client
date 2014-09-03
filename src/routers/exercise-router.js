codebrowser.router.ExerciseRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        ':instanceId/courses/:courseId(/)':                               'navigateToCourseExercises',
        ':instanceId/courses/:courseId/exercises(/)':                     'courseExercises',
        ':instanceId/students/:studentId/courses/:courseId(/)':           'navigation',
        ':instanceId/students/:studentId/courses/:courseId/exercises(/)': 'exercises'

    },

    /* Initialise */

    initialize: function () {

        this.exerciseView = new codebrowser.view.ExercisesView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    navigateToCourseExercises: function (instanceId, courseId) {

        codebrowser.app.exercise.navigate('#/' +
                                          instanceId +
                                          '/courses/' +
                                          courseId +
                                          '/exercises', { replace: true });

    },

    navigation: function (instanceId, studentId, courseId) {

        codebrowser.app.exercise.navigate('#/' +
                                          instanceId +
                                          '/students/' +
                                          studentId +
                                          '/courses/' +
                                          courseId +
                                          '/exercises', { replace: true });
    },

    courseExercises: function (instanceId, courseId) {

        this.exercises(instanceId, null, courseId);
    },

    exercises: function (instanceId, studentId, courseId) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(3, function () {

            self.exerciseView.render();
            codebrowser.controller.ViewController.push(self.exerciseView);
        });

        if (studentId) {

            var student = codebrowser.model.Student.findOrCreate({ instanceId: instanceId, id: studentId });

            // Fetch student
            this.fetchModel(student, true, function () {

                self.exerciseView.student = student;
                fetchSynced();
            });

        } else {

            fetchSynced();
        }

        var course = codebrowser.model.Course.findOrCreate({ instanceId: instanceId, id: courseId }),
            exerciseCollection = new codebrowser.collection.ExerciseCollection(null, { instanceId: instanceId,
                                                                                       studentId: studentId,
                                                                                       courseId: courseId });
        // Fetch course
        this.fetchModel(course, true, function () {

            self.exerciseView.course = course;
            fetchSynced();
        });

        this.exerciseView.collection = exerciseCollection;

        // Fetch exercise collection
        this.fetchModel(exerciseCollection, true, fetchSynced);
    }
});
