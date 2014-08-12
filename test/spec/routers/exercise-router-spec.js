describe('Exercise router', function () {

    beforeEach(function () {

        Backbone.history.stop();
    });

    it('calls exercises function with existing URL', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'exercises');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/students/336/courses/1/exercises', true);

        expect(codebrowser.router.ExerciseRouter.prototype.exercises).toHaveBeenCalled();
    });

    it('navigates to exercises with correct IDs', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'navigation');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/students/336/courses/1', true);

        expect(codebrowser.router.ExerciseRouter.prototype.navigation).toHaveBeenCalled();
    });

    it('calls courseExercises function with correct URL', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'courseExercises');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/courses/123/exercises', true);

        expect(codebrowser.router.ExerciseRouter.prototype.courseExercises).toHaveBeenCalled();
    });

    it('navigates to course exercises with correct URL', function () {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'navigateToCourseExercises');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/courses/1', true);

        expect(codebrowser.router.ExerciseRouter.prototype.navigateToCourseExercises).toHaveBeenCalled();
    });

    it('catches an non-existent URL', function (done) {

        spyOn(codebrowser.router.ExerciseRouter.prototype, 'notFound');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/students/-9999/courses/-6666/exercises');

        setTimeout(function () {
            expect(codebrowser.router.ExerciseRouter.prototype.notFound).toHaveBeenCalled();
            done();
        }, 2000);
    });

    it('pushes exercise view to ViewController', function (done) {

        spyOn(codebrowser.controller.ViewController, 'push');

        var router = new codebrowser.router.ExerciseRouter();

        Backbone.history.start();
        router.navigate('#/courses/662/exercises', true);

        setTimeout(function () {
            expect(codebrowser.controller.ViewController.push).toHaveBeenCalled();
            done();
        }, 2000);
    });
});
