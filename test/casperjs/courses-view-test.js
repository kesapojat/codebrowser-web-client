casper.test.begin('Courses view (all courses)', 9, function suite(test) {

    FakeServer.return({

        'students': { id: 0 },

        'courses': [
            { id: 11, name: 'Course 1', exercises: [ {}, {} ] },
            { id: 12, name: 'Course 2', exercises: [ {}, {}, {} ] }
        ]
    });

    casper.start('http://localhost:8000');

    casper.then(function () {

        this.clickLabel('Courses', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function () {

        test.assertUrlMatch(new RegExp('/#/courses$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Courses', 'has "Courses" label active in the navbar');

        test.assertTextExists('Courses (2)', 'has title "Courses (2)"');
        test.assertElementCount('tbody tr', 2, 'has exactly two courses listed');

        test.assertTextExists('Course 1', 'has a course named "Course 1"');
        test.assertTextExists('Course 2', 'has a course named "Course 2"');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/11/exercises">Course 1') !== -1,
                                                 'has "Course 1" with a correct link to course view');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/12/exercises">Course 2') !== -1,
                                                 'has "Course 2" with a correct link to course view');
    });

    casper.then(function () {

        this.echo('Searching courses with string "rse 1"');

        test.assertSelectorHasText('tbody tr td a', 'rse 1', 'has course name in second cell of first row in courses table');
    });

    casper.run(function () {

        this.echo('');
        test.done();
    });
});

casper.test.begin('Courses view (student courses)', 7, function suite(test) {

    FakeServer.return({

        'students': [
            { id: 21, name: 'Student 1' },
            { id: 22, name: 'Student 2' },
            { id: 23, name: 'Student 3' }
        ],

        'students/22': { id: 22, name: 'Student 2' },

        'courses': [
            { id: 11, name: 'Course 1', exercises: [ {}, {} ] },
            { id: 12, name: 'Course 2', exercises: [ {}, {}, {} ] },
            { id: 13, name: 'Course 3', exercises: [ {}, {}, {}, {} ] },
            { id: 14, name: 'Course 4', exercises: [ {}, {}, {}, {} ] }
        ],

        'students/22/courses': [
            { id: 11, name: 'Course 1', exercises: [ {}, {} ] },
            { id: 13, name: 'Course 3', exercises: [ {}, {}, {}, {} ] },
            { id: 14, name: 'Course 4', exercises: [ {}, {}, {}, {} ] }
        ]
    });

    casper.start('http://localhost:8000');

    casper.then(function () {

        this.clickLabel('Students', 'a');
        this.waitForSelector('#students-container');
    });

    casper.then(function () {

        this.echo('Navigating to course list for "Student 2"');
        this.clickLabel('Student 2', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function () {

        test.assertUrlMatch(new RegExp('/#/students/22/courses$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Courses', 'has "Courses" label active in the navbar');
        test.assertTextExists('Student 2 —  Courses (3)', 'has title "Student 2 —  Courses (3)"');

        test.assertElementCount('tbody tr', 3, 'has exactly 3 courses listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/22/courses/11/exercises">Course 1') !== -1,
                                                 'has "Course 1" with a correct link to exercise list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/22/courses/13/exercises">Course 3') !== -1,
                                                 'has "Course 3" with a correct link to exercise list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/22/courses/14/exercises">Course 4') !== -1,
                                                 'has "Course 4" with a correct link to exercise list');
    });

    casper.run(function () {

        this.echo('');
        test.done();
    });
});
