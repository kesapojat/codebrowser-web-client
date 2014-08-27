codebrowser.router.SnapshotRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises/:exerciseId(/)':                                     'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots(/)':                           'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId(/)':               'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId(/)': 'snapshot',

        'courses/:courseId/exercises/:exerciseId/students/:studentId(/)':                                     'navigation',
        'courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots(/)':                           'navigation',
        'courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots/:snapshotId(/)':               'navigation',
        'courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots/:snapshotId/files/:fileId(/)': 'navigation'

    },

    studentId: null,
    exerciseId: null,
    course: null,
    exercise: null,

    /* Initialise */

    initialize: function () {

        this.setUp();
    },

    setUp: function () {

        if (!codebrowser.controller.ViewController.isActive(this.snapshotView)) {

            this.snapshotView = new codebrowser.view.SnapshotView();
            codebrowser.controller.ViewController.push(this.snapshotView);
        }
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();

        codebrowser.controller.ViewController.push(errorView, true);
    },

    navigation: function (courseId, exerciseId, studentId, snapshotId, fileId) {

        this.snapshot(studentId, courseId, exerciseId, snapshotId, fileId, { courseRoute: true });
    },

    snapshot: function (studentId, courseId, exerciseId, snapshotId, fileId, options) {

        var self = this;

        this.setUp();

        var snapshotCollection;

        if (!this.snapshotView.collection || (this.studentId !== studentId || this.exerciseId !== exerciseId)) {

            snapshotCollection = new codebrowser.collection.SnapshotCollection(null, { studentId: studentId,
                                                                                       courseId: courseId,
                                                                                       exerciseId: exerciseId });

            this.snapshotView.collection = snapshotCollection;

            this.studentId = studentId;
            this.exerciseId = exerciseId;

        } else {

            snapshotCollection = this.snapshotView.collection;
        }

        if (options && options.courseRoute) {
            this.snapshotView.courseRoute = true;
        }

        // Wait for fetches to be in sync
        var fetchSynced = _.after(5, function () {

            self.synced(snapshotId, fileId, snapshotCollection);
        });

        /* Fetch */

        var student = codebrowser.model.Student.findOrCreate({ id: studentId });

        // Fetch student
        this.fetchModel(student, true, function () {

            self.snapshotView.student = student;
            fetchSynced();
        });

        // Fetch course
        var course = codebrowser.model.Course.findOrCreate({ id: courseId });

        this.fetchModel(course, true, function () {

            self.course = course;
            fetchSynced();
        });

        var exercise = codebrowser.model.Exercise.findOrCreate({ id: exerciseId, courseId: courseId });

        // Fetch exercise
        this.fetchModel(exercise, true, function () {

            self.exercise = exercise;
            fetchSynced();
        });

        // Fetch snapshot collection
        this.fetchModel(snapshotCollection, true, fetchSynced);

        // Fetch all related files
        snapshotCollection.fetchFiles(fetchSynced);
    },

    synced: function (snapshotId, fileId, snapshotCollection) {

        var snapshot;

        // No snapshot ID specified, navigate to first snapshot
        if (!snapshotId) {

            snapshot = snapshotCollection.at(0);
            snapshot.set('exercise', this.exercise);
            snapshot.set('course', this.course);

            this.snapshotView.navigate(snapshot, null, { replace: true });

            return;
        }

        // Snapshot
        snapshot = snapshotCollection.get(snapshotId);

        // Invalid snapshot ID
        if (!snapshot) {

            this.notFound();

            return;
        }

        // No file ID specified, navigate to first file
        if (!fileId) {

            this.snapshotView.navigate(snapshot, null);

            return;
        }

        // Invalid file ID
        if (!snapshot.get('files').get(fileId)) {

            this.notFound();

            return;
        }

        snapshot.set('exercise', this.exercise);
        snapshot.set('course', this.course);
        this.snapshotView.update(snapshot, fileId);
    }
});
