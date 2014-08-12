describe('Student router', function () {

    beforeEach(function () {

        Backbone.history.stop();
    });

    it('calls exerciseStudents function with correct URL', function () {

        spyOn(codebrowser.router.StudentRouter.prototype, 'exerciseStudents');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/courses/1/exercises/3/students', true);

        expect(codebrowser.router.StudentRouter.prototype.exerciseStudents).toHaveBeenCalled();
    });

    it('calls student function with correct URL', function () {

        spyOn(codebrowser.router.StudentRouter.prototype, 'students');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/students', true);

        expect(codebrowser.router.StudentRouter.prototype.students).toHaveBeenCalled();
    });

    it('navigates to students list with correct IDs', function () {

        spyOn(codebrowser.router.StudentRouter.prototype, 'navigation');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/courses/1/exercises/3', true);

        expect(codebrowser.router.StudentRouter.prototype.navigation).toHaveBeenCalled();
    });

    it('catches an URL with incorrect course id', function (done) {

        spyOn(codebrowser.router.StudentRouter.prototype, 'notFound');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/courses/3/exercises/-6666/students');

        setTimeout(function () {
            expect(codebrowser.router.StudentRouter.prototype.notFound).toHaveBeenCalled();
            done();
        }, 2000);
    });

    it('pushes error view to ViewController', function (done) {

        spyOn(codebrowser.controller.ViewController, 'push');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/courses/3/exercises/-6666/students', true);

        setTimeout(function () {
            expect(codebrowser.controller.ViewController.push).toHaveBeenCalled();
            done();
        }, 2000);
    });

    it('pushes student view to ViewController', function (done) {

        spyOn(codebrowser.controller.ViewController, 'push');

        var router = new codebrowser.router.StudentRouter();

        Backbone.history.start();
        router.navigate('#/courses/662/exercises/815/students', true);

        setTimeout(function () {
            expect(codebrowser.controller.ViewController.push).toHaveBeenCalled();
            done();
        }, 2000);
    });
});
