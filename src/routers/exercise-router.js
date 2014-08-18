codebrowser.router.ExerciseRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'courses/:courseId(/)':                               'navigateToCourseExercises',
        'courses/:courseId/exercises(/)':                     'courseExercises',
        'students/:studentId/courses/:courseId(/)':           'navigation',
        'students/:studentId/courses/:courseId/exercises(/)': 'exercises'

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

    navigateToCourseExercises: function (courseId) {

        codebrowser.app.exercise.navigate('#/courses/' +
                                          courseId +
                                          '/exercises', { replace: true });

    },

    navigation: function (studentId, courseId) {

        codebrowser.app.exercise.navigate('#/students/' +
                                          studentId +
                                          '/courses/' +
                                          courseId +
                                          '/exercises', { replace: true });
    },

    courseExercises: function (courseId) {

        this.exercises(null, courseId);
    },

    exercises: function (studentId, courseId) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(3, function () {
            self.exerciseView.render();
            codebrowser.controller.ViewController.push(self.exerciseView);
        });

        if (studentId) {

            var student = codebrowser.model.Student.findOrCreate({ id: studentId });

            // Fetch student
            this.fetchModel(student, true, function () {

                self.exerciseView.student = student;
                fetchSynced();
            });

        } else {

            fetchSynced();
        }

        var course = codebrowser.model.Course.findOrCreate({ id: courseId });

        var exerciseCollection = new codebrowser.collection.ExerciseCollection(null, { studentId: studentId,
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
