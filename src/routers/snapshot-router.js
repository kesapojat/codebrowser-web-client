codebrowser.router.SnapshotRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises/:exerciseId(/)':                                                  'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots(/)':                                        'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId(/)':                            'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId?level=:level(/)': 'snapshot',

        'courses/:courseId/exercises/:exerciseId/students/:studentId(/)':                                                  'navigation',
        'courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots(/)':                                        'navigation',
        'courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots/:snapshotId(/)':                            'navigation',
        'courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots/:snapshotId/files/:fileId?level=:level(/)': 'navigation'

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

    navigation: function (courseId, exerciseId, studentId, snapshotId, fileId, level) {

        this.snapshot(studentId, courseId, exerciseId, snapshotId, fileId, level, { courseRoute: true });
    },

    snapshot: function (studentId, courseId, exerciseId, snapshotId, fileId, level, options) {

        var self = this;

        this.setUp();

        var snapshotCollection;

        if (!this.snapshotView.collection || (this.studentId !== studentId || this.exerciseId !== exerciseId)) {

            snapshotCollection = new codebrowser.collection.SnapshotCollection(null, { studentId: studentId,
                                                                                       courseId: courseId,
                                                                                       exerciseId: exerciseId });

            // Set snapshot level
            snapshotCollection.level = level || localStorage.getItem(config.storage.cache.snapshot.level);

            this.studentId = studentId;
            this.exerciseId = exerciseId;
            this.snapshotView.collection = snapshotCollection;

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
        this.fetchModel(snapshotCollection, true, function () {

            // Exercise has no snapshots
            if (snapshotCollection.length === 0) {
                self.notFound();
                return;
            }

            fetchSynced();
        }, { level: snapshotCollection.level });

        // Fetch all related files
        snapshotCollection.fetchFiles(function (error) {

            if (error) {
                self.notFound();
                return;
            }

            fetchSynced();
        });
    },

    synced: function (snapshotId, fileId, snapshotCollection) {

        var snapshot;

        // No snapshot ID specified, navigate to first snapshot
        if (!snapshotId) {

            snapshot = snapshotCollection.at(0);
            this.snapshotView.navigate(snapshot, null, { replace: true });

            return;
        }

        // Snapshot
        snapshot = snapshotCollection.get(snapshotId) || snapshotCollection.at(0);

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

            if (!snapshot.get('files').at(0)) {
                this.notFound();
            } else {
                this.snapshotView.navigate(snapshot, null);
            }

            return;
        }

        snapshot.set('exercise', this.exercise);
        snapshot.set('course', this.course);

        this.snapshotView.update(snapshot, fileId);
    }
});
