describe('Exercise router', function () {

    beforeEach(function () {

        FakeServer.return({

            'instance/courses/1': 404,
            'instance/courses/-6666': 404,
            'instance/courses/662': 404,
            'instance/courses/662/exercises': 404,
            'instance/courses/123': 404,
            'instance/courses/123/exercises': 404,
            'instance/students/336': 404,
            'instance/students/336/courses/1/exercises': 404,
            'instance/students/372': 404,
            'instance/students/372/courses/1/exercises': 404,
            'instance/students/-9999': 404,
            'instance/students/-9999/courses/-6666/exercises': 404,
            'instance/students/-6666': 404

        });

        Backbone.history.stop();
    });

    it('calls exercises function with existing URL', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'exercises');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/instance/students/336/courses/1/exercises', true);

        expect(codebrowser.router.ExerciseRouter.prototype.exercises).toHaveBeenCalled();
    });

    it('navigates to exercises with correct IDs', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'navigation');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/instance/students/336/courses/1', true);

        expect(codebrowser.router.ExerciseRouter.prototype.navigation).toHaveBeenCalled();
    });

    it('calls courseExercises function with correct URL', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'navigateToCourseExercises');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/instance/courses/123', true);

        expect(codebrowser.router.ExerciseRouter.prototype.navigateToCourseExercises).toHaveBeenCalled();
    });

    it('calls courseExercises function with correct URL', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'courseExercises');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/instance/courses/123/exercises', true);

        expect(codebrowser.router.ExerciseRouter.prototype.courseExercises).toHaveBeenCalled();
    });

    it('catches an non-existent URL', function (done) {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'notFound');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/instance/students/-9999/courses/-6666/exercises');

        setTimeout(function () {

            expect(codebrowser.router.ExerciseRouter.prototype.notFound).toHaveBeenCalled();
            done();

        }, config.test.async.waitDuration);
    });

    it('pushes exercise view to ViewController', function (done) {

        spyOn(codebrowser.controller.ViewController, 'push');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/instance/courses/662/exercises', true);

        setTimeout(function () {

            expect(codebrowser.controller.ViewController.push).toHaveBeenCalled();
            done();

        }, config.test.async.waitDuration);
    });
});