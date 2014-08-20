casper.test.begin('Students view (all students)', 9, function suite(test) {

    mockData = {

        'students': [
            { id: 21, name: 'Student 1', courses: [ {}, {} ] },
            { id: 22, name: 'Student 2', courses: [ {}, {}, {} ] },
            { id: 23, name: 'Student 3', courses: [ {}, {}, {}, {} ] }
        ]
    };

    casper.start('http://localhost:8000');

    casper.then(function () {

        this.clickLabel('Students', 'a');
        this.waitForSelector('#students-container');
    });

    casper.then(function () {

        test.assertUrlMatch(new RegExp('/#/students$'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
        test.assertTextExists('Students (3)', 'has title "students (3)"');

        test.assertElementCount('tbody tr', 3, 'has exactly 3 students listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/21/courses">Student 1') !== -1,
                                                 'has "Student 1" with a correct link to course list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/22/courses">Student 2') !== -1,
                                                 'has "Student 3" with a correct link to course list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/students/23/courses">Student 3') !== -1,
                                                 'has "Student 3" with a correct link to course list');

    });

    casper.then(function () {

        this.echo('Searching students with string "ent 2"');

        test.assertElementCount('tbody tr', 3, 'has exactly 3 students listed');
        test.assertSelectorHasText('tbody tr td a', 'Student 1', 'has name in second cell of first row in students table');
    });

    casper.run(function () {

        this.echo('');
        test.done();
    });
});

casper.test.begin('Students view (course-exercise students)', 6, function suite(test) {

    mockData = {

        'courses': [
            { id: 11, name: 'Course 1', exercises: [ { id: 31, name: 'Exercise 1' }, { id: 32, name: 'Exercise 2' } ] },
            { id: 12, name: 'Course 2', exercises: [ { id: 31, name: 'Exercise 1' }, { id: 32, name: 'Exercise 2' }, { id: 33, name: 'Exercise 3' } ] }
        ],

        'courses/11': { id: 11, name: 'Course 1', exercises: [ { id: 31, name: 'Exercise 1' }, { id: 32, name: 'Exercise 2' } ] },

        'courses/11/exercises': [
            { id: 31, name: 'Exercise 1' },
            { id: 32, name: 'Exercise 2' }
        ],

        'courses/11/exercises/32': { id: 32, name: 'Exercise 2' },

        'courses/11/exercises/32/students': [
            { id: 21, name: 'Student 1', courses: [ {}, {} ] },
            { id: 22, name: 'Student 2', courses: [ {}, {}, {} ] },
        ],

        'students': [
            { id: 21, name: 'Student 1', courses: [ {}, {} ] },
            { id: 22, name: 'Student 2', courses: [ {}, {}, {} ] },
            { id: 23, name: 'Student 3', courses: [ {}, {}, {}, {} ] }
        ]
    };

    casper.start('http://localhost:8000');

    casper.then(function () {

        this.clickLabel('Courses', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function () {

        this.clickLabel('Course 1', 'a');
        this.waitForSelector('#exercises-container');
    });

    casper.then(function () {

        this.clickLabel('Exercise 2', 'a');
        this.waitForSelector('#students-container');
    });

    casper.then(function () {

        this.echo('Navigating to student list for "Course 1" and "exercise 2"');

        test.assertUrlMatch(new RegExp('/#/courses/11/exercises/32/students'), 'has correct URL');
        test.assertSelectorHasText('li.active', 'Students', 'has "Students" label active in the navbar');
        test.assertTextExists('Course 1 — Exercise 2 —  Students (2)', 'has title "Course 1 —  Exercise 2 —  Students (2)"');

        test.assertElementCount('tbody tr', 2, 'has exactly 2 students listed');

        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/11/exercises/32/students/21/snapshots">Student 1') !== -1,
                                                 'has "Student 1" with a correct link to exercise list');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/courses/11/exercises/32/students/22/snapshots">Student 2') !== -1,
                                                 'has "Student 2" with a correct link to exercise list');
    });

    casper.run(function () {

        this.echo('');
        test.done();
    });
});
