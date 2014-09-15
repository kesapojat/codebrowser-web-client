codebrowser.view.SnapshotView = Backbone.View.extend({

    id: 'snapshot-container',

    template: {

        navigationbarContainer: Handlebars.templates.NavigationBarContainer,
        navigationContainer:    Handlebars.templates.SnapshotActionsContainer

    },

    events: {

        'click #toggleBrowser': 'toggleBrowser',
        'click #split':         'split',
        'click #diff':          'diff',
        'click #level':         'level',
        'click #play':          'playback',

        'click #first':         'first',
        'click #previous':      'previous',
        'click #next':          'next',
        'click #last':          'last'

    },

    /* Routing */

    courseRoute: false,

    /* Browser */

    browser: true,

    /* Playback */

    play: false,

    /* Initialise */

    initialize: function () {

        // Hide view until needed
        this.$el.hide();

        // Navigation bar
        this.navigationbarContainer = $('<div>', { id: 'navigation-bar-container' });
        this.$el.append(this.navigationbarContainer);

        // Timeline
        this.snapshotsTimelineView = new codebrowser.view.SnapshotsTimelineView({ parentView: this });
        this.$el.append(this.snapshotsTimelineView.el);

        // Navigation
        this.navigationContainer = $('<div>', { id: 'snapshot-navigation-container' });
        this.$el.append(this.navigationContainer);

        // Content container
        var contentContainer = $('<div>', { id: 'snapshot-content-container' });

        // Browser
        this.snapshotBrowserView = new codebrowser.view.SnapshotBrowserView({ parentView: this });
        contentContainer.append(this.snapshotBrowserView.el);

        // Editor
        this.editorView = new codebrowser.view.EditorView();
        contentContainer.append(this.editorView.el);

        this.$el.append(contentContainer);

        // Bind resize
        $(window).resize($.proxy(this.resize, this));

        // Bind keydown
        $(document).keydown($.proxy(this.keydown, this));
    },

    /* Remove */

    remove: function () {

        // Unbind resize
        $(window).off('resize', this.resize);

        // Unbind keydown
        $(document).off('keydown', this.keydown);

        // Remove timeline
        this.snapshotsTimelineView.remove();

        // Remove browser view
        this.snapshotBrowserView.remove();

        // Remove editor
        this.editorView.remove();

        Backbone.View.prototype.remove.call(this);
    },

    /* Render */

    render: function () {

        // Index of the current model
        var index = this.collection.indexOf(this.model);

        // View attributes
        var attributes = {

            current: index + 1,
            total: this.collection.length,
            keyLevel: this.collection.isKeyLevel()

        }

        // Template for navigation bar container
        var navigationbarContainerOutput = $(this.template.navigationbarContainer(_.extend(this.model.toJSON(),
                                            { student:  this.student.toJSON(),
                                              course: this.model.get('course').toJSON(),
                                              exercise: this.model.get('exercise').toJSON(),
                                              courseRoute: this.courseRoute })));

        // Template for navigation container
        var navigationContainerOutput = $(this.template.navigationContainer(attributes));

        // Remember previously set playback speed
        var selectedSpeed = $('#speed').val() || '1x';

        // Update action buttons
        this.updateActions(navigationContainerOutput, index);

        // Update navigation buttons
        this.updateNavigation(navigationContainerOutput, index);

        if (!this.rendered) {

            // Update navigation container
            this.navigationContainer.html(navigationContainerOutput);

        } else {

            // Update navigation container partially
            this.$el.find('#snapshot-navigation').replaceWith($('#snapshot-navigation', navigationContainerOutput));
        }

        // Update navigation bar container
        this.navigationbarContainer.html(navigationbarContainerOutput);

        // Set selected speed
        $('#speed', navigationContainerOutput).val(selectedSpeed);

        this.rendered = true;
    },

    /* Update */

    updateActions: function (navigationContainerOutput) {

        if (this.rendered) {
            navigationContainerOutput = this.navigationContainer;
        }

        // Browser is enabled, set toggleBrowser button as active
        if (this.browser) {
            $('#toggleBrowser', navigationContainerOutput).addClass('active');
        }

        // Split view is enabled, set split button as active
        if (this.editorView.split) {
            $('#split', navigationContainerOutput).addClass('active');
        }

        // Disable split button if editor can not be split
        if (!this.editorView.canSplit()) {
            $('#split', navigationContainerOutput).attr('disabled', true);
        }

        // Diff is enabled, set diff button as active
        if (this.editorView.diff) {
            $('#diff', navigationContainerOutput).addClass('active');
        }

        // Key-level, set button as active
        if (this.collection.isKeyLevel()) {
            $('#level', navigationContainerOutput).addClass('active');
        }

        // Playback on, change play-button to stop-button
        if (this.play) {

            $('#play span', navigationContainerOutput).toggleClass('glyphicon-stop', 'glyphicon-play');

        } else if (!this.play && $('#play span', navigationContainerOutput).hasClass('glyphicon-stop')) {

            $('#play span', navigationContainerOutput).removeClass('glyphicon-stop');
            $('#play').removeClass('active');
        }
    },

    updateNavigation: function (navigationContainerOutput, index) {

        // If first snapshot, disable the buttons for first and previous
        $('#first', navigationContainerOutput).attr('disabled', index === 0);
        $('#previous', navigationContainerOutput).attr('disabled', index === 0);

        // If last snapshot, disable the buttons for next and last
        $('#next', navigationContainerOutput).attr('disabled', index === this.collection.length - 1);
        $('#last', navigationContainerOutput).attr('disabled', index === this.collection.length - 1);
    },

    update: function (snapshot, fileId) {

        this.model = snapshot;

        // Restore browser state if necessary
        if (this.browser) {
            this.toggleBrowser(null, localStorage.getItem(config.storage.view.SnapshotView.browser) === 'true');
        }

        // Previous snapshot
        var index = this.collection.indexOf(snapshot),
            previousSnapshot = this.collection.at(index - 1);

        // First snapshot
        if (!previousSnapshot) {

            // Use the current snapshot as the previous
            previousSnapshot = this.model;
        }

        // Determine current file
        this.file = this.model.get('files').get(fileId);
        var filename = this.file.get('name');

        // Determine previous file if it exists
        var previousFile = previousSnapshot.get('files').findWhere({ name: filename });

        // Show view if necessary
        this.$el.show();

        // Update timeline
        this.snapshotsTimelineView.update(this.collection, index, filename, this.courseRoute);

        // Update editor
        this.editorView.update(previousFile || this.file, this.file);

        // Update browser
        this.snapshotBrowserView.update(this.model, this.file, this.courseRoute);

        // Navigate automatically to new or modified file in playback-mode
        if (this.play) {

            var current = $('#snapshot-files-container ul li.active a').attr('href'),
                url = $('#snapshot-files-container ul li.new a').attr('href') ||
                      $('#snapshot-files-container ul li.modified a').attr('href');

            if (url && current !== url) {
                codebrowser.app.snapshot.navigate(url.substring(2), { replace: true });
                return;
            }
        }

        // Resume playback
        if (this.play && !this.playId) {
            this.play = false;
            this.playback();
        }

        this.render();
    },

    /* Events */

    resize: function () {

        this.didResize();
    },

    didResize: function () {

        this.snapshotsTimelineView.didResize();
        this.editorView.didResize();
    },

    keydown: function (event) {

        // Left
        if (event.keyCode === 37) {
            this.previous();
        }

        // Right
        if (event.keyCode === 39) {
            this.next();
        }
    },

    /* Actions */

    toggleBrowser: function (event, browser) {

        // Use parameter if given, otherwise toggle internal browser state
        if (browser !== undefined) {

            this.browser = browser;

        } else {

            this.browser = !this.browser;

            // Store browser state
            localStorage.setItem(config.storage.view.SnapshotView.browser, this.browser);
        }

        // Enable browser
        if (this.browser) {

            // Move editor view
            this.editorView.$el.css('margin-left', this.snapshotBrowserView.$el.width() + 30);
            this.editorView.didResize();

            this.snapshotBrowserView.$el.show();

            return;
        }

        // Disable browser
        this.snapshotBrowserView.$el.hide();

        // Move editor view
        this.editorView.$el.css('margin-left', 0);
        this.editorView.didResize();
    },

    split: function () {

        this.editorView.toggleSplit();
    },

    diff: function () {

        this.editorView.toggleDiff();
        this.snapshotBrowserView.update(this.model, this.file, this.courseRoute);
    },

    level: function () {

        this.collection.level = this.collection.isCodeLevel() ? 'key' : 'code';
        this.snapshotsTimelineView.rendered = false;

        this.navigate();
    },

    playback: function () {

        // Pressed button in playback-mode, stop playing
        if (this.play) {

            clearInterval(this.playId);
            this.play = false;

        } else {

            var multiplier = parseFloat($('#speed', this.navigationContainerOutput).val());

            this.play = true;
            var self = this;

            this.playId = setInterval(function() {

                // Last snapshot, stop playback
                if (self.collection.last() === self.model) {
                    clearInterval(self.playId);
                    self.play = false;
                    self.render();
                    return;
                }

                self.next();

            }, 1000 / multiplier);
        }

        this.render();
        return;
    },

    /* Actions - Navigation */

    url: function () {

        return '#/' +
               this.collection.instanceId +
               (this.courseRoute ? '/courses/' : '/students/') +
               (this.courseRoute ? this.collection.courseId : this.collection.studentId) +
               (this.courseRoute ? '/exercises/' : '/courses/') +
               (this.courseRoute ? this.collection.exerciseId : this.collection.courseId) +
               (this.courseRoute ? '/students/' : '/exercises/') +
               (this.courseRoute ? this.collection.studentId : this.collection.exerciseId) +
               '/snapshots/';
    },

    navigate: function (snapshot, file, options) {

        // Pause playback until navigation is complete
        if (this.play && this.playId) {
            clearInterval(this.playId);
            this.playId = null;
        }

        if (!snapshot) {

            codebrowser.app.snapshot.navigate(this.url(), { replace: !options ? options : options.replace });

            return;
        }

        // Use first file if non specified
        if (!file) {
            file = snapshot.get('files').first();
        }

        codebrowser.app.snapshot.navigate(this.url() +
                                          snapshot.id +
                                         '/files/' +
                                         file.id +
                                         '?level=' +
                                         this.collection.level, { replace: !options ? options : options.replace });
    },

    first: function () {

        var first = this.collection.first(),
            file = first.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(first, file);
    },

    previous: function () {

        var index = this.collection.indexOf(this.model),
            previous = this.collection.at(index - 1);

        if (!previous) {
            return;
        }

        var file = previous.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(previous, file);
    },

    next: function () {

        var index = this.collection.indexOf(this.model),
            next = this.collection.at(index + 1);

        if (!next) {
            return;
        }

        var file = next.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(next, file);
    },

    last: function () {

        var last = this.collection.last(),
            file = last.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(last, file);
    }
});
