describe('Course router', function () {

    FakeServer.return({

        'instance/students/-9999': 404,
        'instance/students/-9999/courses': 404
    });

    beforeEach(function () {

        Backbone.history.stop();
    });

    it('calls courses function', function () {

        spyOn(codebrowser.router.CourseRouter.prototype, 'courses');

        var router = new codebrowser.router.CourseRouter();

        Backbone.history.start();
        router.navigate('#/instance/courses', true);

        expect(codebrowser.router.CourseRouter.prototype.courses).toHaveBeenCalled();
    });

    it('navigates from student id to student\'s course listing', function () {

        spyOn(codebrowser.router.CourseRouter.prototype, 'navigation');

        var router = new codebrowser.router.CourseRouter();

        Backbone.history.start();
        router.navigate('#/instance/students/1', true);

        expect(codebrowser.router.CourseRouter.prototype.navigation).toHaveBeenCalled();
    });

    it('catches an non-existent student id', function (done) {

        spyOn(codebrowser.router.CourseRouter.prototype, 'notFound');

        var router = new codebrowser.router.CourseRouter();

        Backbone.history.start();
        router.navigate('#/instance/students/-9999/courses');

        setTimeout(function () {

            expect(codebrowser.router.CourseRouter.prototype.notFound).toHaveBeenCalled();
            done();

        }, config.test.async.waitDuration);
    });
});
