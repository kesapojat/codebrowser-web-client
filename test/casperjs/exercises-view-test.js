casper.test.begin('Exercises view (course exercises)', 13, function suite(test) {

    FakeServer.return({

        '': [
            { id: 'instance', name: 'instance' },
            { id: 'mooc', name: 'mooc' }
        ],

        'instance': { id: 'instance', name: 'instance' },

        'instance/students': { id: 0 },

        'instance/courses': [
            { id: 11, name: 'Course 1' },
            { id: 12, name: 'Course 2' }
        ],

        'instance/courses/11': { id: 11, name: 'Course 1' },

        'instance/courses/11/exercises': [
            { id: 31, name: 'Exercise 1' },
            { id: 32, name: 'Exercise 2' }
        ],

        'instance/courses/12': { id: 12, name: 'Course 2' },

        'instance/courses/12/exercises': [
            { id: 32, name: 'Exercise 2' },
            { id: 33, name: 'Exercise 3' },
            { id: 34, name: 'Exercise 4' }
        ]
    });

    casper.start('http://localhost:8000');

    casper.then(function () {

        this.clickLabel('instance', 'a');
        this.waitForSelector('#instance-container');
    });

    casper.then(function () {

        this.clickLabel('Courses', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function () {

        this.clickLabel('Course 1', 'a');
        this.waitForSelector('#exercises-container');
    });

    casper.then(function () {

        this.echo('Navigating to exercise list of "Course 1"');

        test.assertUrlMatch(new RegExp('/#/instance/courses/11/exercises$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');

        test.assertTextExists('Course 1 — Exercises (2)', 'has title "Course 1 — Exercises (2)"');
        test.assertElementCount('tbody tr', 2, 'has exactly 2 exercises listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/instance/courses/11/exercises/31/students">Exercise 1') !== -1,
                                                 'has Exercise 1 with a correct link to student list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/instance/courses/11/exercises/32/students">Exercise 2') !== -1,
                                                 'has Exercise 2 with a correct link to student list');
    });

    casper.then(function () {

        this.echo('Navigating back to courses list');
        casper.back();
        this.waitForSelector('#courses-container');
    });

    casper.then(function () {

        this.echo('Navigating to exercise list of "Course 2"');
        this.clickLabel('Course 2', 'a');
        this.waitForSelector('#exercises-container');
    });

    casper.then(function () {

        test.assertUrlMatch(new RegExp('/#/instance/courses/12/exercises$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');
        test.assertTextExists('Course 2 — Exercises (3)', 'has title "Course 2 — Exercises (3)"');

        test.assertElementCount('tbody tr', 3, 'has exactly 3 exercises listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/instance/courses/12/exercises/32/students">Exercise 2') !== -1,
                                                 'has "Exercise 2" with a correct link to student list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/instance/courses/12/exercises/33/students">Exercise 3') !== -1,
                                                 'has "Exercise 3" with a correct link to student list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/instance/courses/12/exercises/34/students">Exercise 4') !== -1,
                                                 'has "Exercise 4" with a correct link to student list');
    });

    casper.run(function () {

        this.echo('');
        test.done();
    });
});

casper.test.begin('Exercises view (student-course exercises)', 6, function suite(test) {

    FakeServer.return({

        '': [
            { id: 'instance', name: 'instance' },
            { id: 'mooc', name: 'mooc' }
        ],

        'instance': { id: 'instance', name: 'instance' },

        'instance/students': [
            { id: 21, name: 'Student 1' },
            { id: 22, name: 'Student 2' },
            { id: 23, name: 'Student 3' }
        ],

        'instance/students/21': { id: 21, name: 'Student 1' },

        'instance/students/21/courses': [
            { id: 11, name: 'Course 1' },
            { id: 12, name: 'Course 2' }
        ],

        'instance/students/21/courses/11/exercises': [
            { id: 31, name: 'Exercise 1' },
            { id: 32, name: 'Exercise 2' }
        ],

        'instance/courses/11': { id: 11, name: 'Course 1' },

        'instance/courses/11/exercises': [
            { id: 31, name: 'Exercise 1' },
            { id: 32, name: 'Exercise 2' }
        ]
    });

    casper.start('http://localhost:8000');

    casper.then(function () {

        this.clickLabel('instance', 'a');
        this.waitForSelector('#instance-container');
    });

    casper.then(function () {

        this.clickLabel('Students', 'a');
        this.waitForSelector('#students-container');
    });

    casper.then(function () {

        this.clickLabel('Student 1', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function () {

        this.clickLabel('Course 1', 'a');
        this.waitForSelector('#exercises-container');
    });

    casper.then(function () {

        this.echo('Navigating to exercise list for "Student 1" and "Course 1"');

        test.assertUrlMatch(new RegExp('/#/instance/students/21/courses/11/exercises$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');

        test.assertTextExists('Student 1 —  Course 1 — Exercises (2)', 'has title "Student 1 —  Course 1 — Exercises (2)"');
        test.assertElementCount('tbody tr', 2, 'has exactly 2 exercises listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/instance/students/21/courses/11/exercises/31/snapshots">Exercise 1') !== -1,
                                                 'has "Exercise 1" with a correct link to snapshots');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/instance/students/21/courses/11/exercises/32/snapshots">Exercise 2') !== -1,
                                                 'has "Exercise 2" with a correct link to snapshots');
    });

    casper.run(function () {

        this.echo('');
        test.done();
    });
});

casper.test.begin('Exercises view (course-student exercises)', 6, function suite(test) {

    FakeServer.return({

        '': [
            { id: 'instance', name: 'instance' },
            { id: 'mooc', name: 'mooc' }
        ],

        'instance': { id: 'instance', name: 'instance' },

        'instance/students': [
            { id: 21, name: 'Student 1' },
            { id: 22, name: 'Student 2' },
            { id: 23, name: 'Student 3' }
        ],

        'instance/courses': [
            { id: 11, name: 'Course 1' },
            { id: 12, name: 'Course 2' }
        ],

        'instance/courses/11': { id: 11, name: 'Course 1' },

        'instance/courses/11/exercises': [
            { id: 31, name: 'Exercise 1' },
            { id: 32, name: 'Exercise 2' }
        ]
    });

    casper.start('http://localhost:8000');

    casper.then(function () {

        this.clickLabel('instance', 'a');
        this.waitForSelector('#instance-container');
    });

    casper.then(function () {

        this.clickLabel('Courses', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function () {

        this.clickLabel('Course 1', 'a');
        this.waitForSelector('#exercises-container');
    });

    casper.then(function () {

        this.echo('Navigating to exercise list for "Course 1" and "Student 3"');

        test.assertUrlMatch(new RegExp('/#/instance/courses/11/exercises$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Exercises', 'has "Exercises" label active in the navbar');

        test.assertTextExists('Course 1 — Exercises (2)', 'Course 1 — Exercises (2)"');
        test.assertElementCount('tbody tr', 2, 'has exactly 2 exercises listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/instance/courses/11/exercises/31/students">Exercise 1') !== -1,
                                                 'has "Exercise 1" with a correct link to students');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/instance/courses/11/exercises/32/students">Exercise 2') !== -1,
                                                 'has "Exercise 2" with a correct link to students');
    });

    casper.run(function () {

        this.echo('');
        test.done();
    });
});
