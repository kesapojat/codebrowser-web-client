describe('Snapshot router', function () {

    beforeEach(function () {

        FakeServer.return({

            'instance/students/336': 404,
            'instance/students/336/courses/1/exercises/3/snapshots': 404,
            'instance/students/1': 404,
            'instance/students/1/courses/1/exercises/3/snapshots': 404,
            'instance/students/-9999': 404,
            'instance/students/-9999/courses/3/exercises/1/snapshots': 404,
            'instance/students/-9999/courses/3/exercises/1/snapshots/files.zip?level=code': [],
            'instance/students/2/courses/1/exercises/3/snapshots/files.zip?level=code': [],
            'instance/students/2/courses/1/exercises/3/snapshots/5/files/-9999': 404,

            'instance/students/2':
                { id: 2, name: 'student 1', courses: [{}]},

            'instance/students/2/courses/1/exercises/3/snapshots': [
                {
                    id: 5,
                    timestamp: 1371210876758,
                    files: [{ id: 51, name: 'file1.java' }]
                }
            ],

            'instance/courses': [
                { id: 1, name: 'Course 1' },
                { id: 3, name: 'Course 3' }
            ],

            'instance/courses/1': { id: 1, name: 'Course 1' },
            'instance/courses/3': { id: 3, name: 'Course 3' },

            'instance/courses/1/exercises': [
                { id: 3, name: 'Exercise 3' }
            ],

            'instance/courses/3/exercises': [
                { id: 1, name: 'Exercise 1' }
            ],

            'instance/courses/1/exercises/3': { id: 3, name: 'Exercise 3' },
            'instance/courses/3/exercises/1': { id: 1, name: 'Exercise 1' },

            'instance/courses/3/exercises/1/snapshots': [
                { id: 4, timestamp: 140030985095, files: [{ id: 52, name: 'file2.java' }] }
            ]
        });

        Backbone.history.stop();
    });

    it('calls snapshot function with existing URL', function () {

        spyOn(codebrowser.router.SnapshotRouter.prototype, 'snapshot');

        var router = new codebrowser.router.SnapshotRouter();

        Backbone.history.start();
        router.navigate('#/instance/students/336/courses/1/exercises/3/snapshots/364', true);

        expect(codebrowser.router.SnapshotRouter.prototype.snapshot).toHaveBeenCalled();
    });

    it('navigates to snapshots with correct IDs', function () {

        spyOn(codebrowser.router.SnapshotRouter.prototype, 'navigation');

        var router = new codebrowser.router.SnapshotRouter();

        Backbone.history.start();
        router.navigate('#/instance/courses/1/exercises/3/students/1', true);

        expect(codebrowser.router.SnapshotRouter.prototype.navigation).toHaveBeenCalled();
    });
});