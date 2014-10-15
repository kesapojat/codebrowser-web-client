codebrowser.router.SnapshotRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        ':instanceId/students/:studentId/courses/:courseId/exercises/:exerciseId(/)':                                                  'snapshot',
        ':instanceId/students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots(/)':                                        'snapshot',
        ':instanceId/students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId(/)':                            'snapshot',
        ':instanceId/students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId?level=:level(/)': 'snapshot',

        ':instanceId/courses/:courseId/exercises/:exerciseId/students/:studentId(/)':                                                  'navigation',
        ':instanceId/courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots(/)':                                        'navigation',
        ':instanceId/courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots/:snapshotId(/)':                            'navigation',
        ':instanceId/courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots/:snapshotId/files/:fileId?level=:level(/)': 'navigation'

    },

    studentId: null,
    exerciseId: null,
    course: null,
    exercise: null,

    /* Setup */

    setupViewCollections: function (instanceId, studentId, courseId, exerciseId, level) {

        var snapshotCollection;
        var eventCollection;

        // Collection not cached or has changed
        if (!this.snapshotView.collection || (this.studentId !== studentId || this.exerciseId !== exerciseId)) {

            snapshotCollection = new codebrowser.collection.SnapshotCollection(null, { instanceId: instanceId,
                                                                                       studentId: studentId,
                                                                                       courseId: courseId,
                                                                                       exerciseId: exerciseId });

            // Set snapshot level
            snapshotCollection.level = level || localStorage.getItem(config.storage.cache.snapshot.level) || 'code';

            this.studentId = studentId;
            this.exerciseId = exerciseId;
            this.snapshotView.collection = snapshotCollection;

            // We need to also update event collection
            this.snapshotView.eventCollection = null;

        } else {

            snapshotCollection = this.snapshotView.collection;
        }

        // Collection not cached or has changed
        if (!this.snapshotView.eventCollection) {

            eventCollection = new codebrowser.collection.EventCollection(null, { instanceId: instanceId,
                                                                                 studentId: studentId,
                                                                                 courseId: courseId,
                                                                                 exerciseId: exerciseId });

            this.snapshotView.eventCollection = eventCollection;

        } else {

            eventCollection = this.snapshotView.eventCollection;
        }

        return { snapshots: snapshotCollection, events: eventCollection }
    },

    /* Actions */

    navigation: function (instanceId, courseId, exerciseId, studentId, snapshotId, fileId, level) {

        this.snapshot(instanceId, studentId, courseId, exerciseId, snapshotId, fileId, level, { courseRoute: true });
    },

    snapshot: function (instanceId, studentId, courseId, exerciseId, snapshotId, fileId, level, options) {

        // Snapshot View
        if (!codebrowser.controller.ViewController.isActive(this.snapshotView)) {

            this.snapshotView = new codebrowser.view.SnapshotView();

            // Set view as active
            codebrowser.controller.ViewController.push(this.snapshotView);
        }

        // Setup collections (snapshots & events) for snapshot view
        var collection = this.setupViewCollections(instanceId, studentId, courseId, exerciseId, level);

        // Route via course
        if (options && options.courseRoute) {
            this.snapshotView.courseRoute = true;
        }

        // Fetch
        this.fetch(instanceId, studentId, courseId, exerciseId, snapshotId, fileId, collection.snapshots, collection.events);
    },

    fetch: function (instanceId, studentId, courseId, exerciseId, snapshotId, fileId, snapshotCollection, eventCollection) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(6, function () {

            self.synced(snapshotId, fileId, snapshotCollection);
        });

        /* Fetch */

        var student = codebrowser.model.Student.findOrCreate({ instanceId: instanceId, id: studentId });

        // Fetch student
        this.fetchModel(student, true, function () {

            self.snapshotView.student = student;
            fetchSynced();
        });

        // Fetch course
        var course = codebrowser.model.Course.findOrCreate({ instanceId: instanceId, id: courseId });

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

        // Fetch event collection
        this.fetchModel(eventCollection, true, function () {

            fetchSynced();
        });

        // Fetch snapshot collection
        this.fetchModel(snapshotCollection, true, function () {

            // Exercise has no snapshots
            if (snapshotCollection.length === 0) {
                self.notFound('No snapshots.');
                return;
            }

            // Fetch all related files
            snapshotCollection.fetchZip(function (error) {

                if (error) {
                    self.notFound();
                    return;
                }

                fetchSynced();
            }, snapshotId);

            fetchSynced();

        }, { level: snapshotCollection.level });
    },

    synced: function (snapshotId, fileId, snapshotCollection) {

        // If snapshot ID is not specified, get first snapshot from collection
        var snapshot = snapshotCollection.get(snapshotId) || snapshotCollection.at(0);

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
