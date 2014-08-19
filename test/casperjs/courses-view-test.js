casper.test.begin('Courses view (all courses)', 10, function suite(test) {

    mockData = {

        'courses': [
            { id: 11, name: 'Course 1', exercises: [ {}, {} ] },
            { id: 12, name: 'Course 2', exercises: [ {}, {}, {} ] }
        ],

        'students': { id: 0 }
    };

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

        test.assertEquals($('tr:contains(Course 2)').find(':nth-child(3)').html(), '3', 'has exercise count 3 for "Course 2"');
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

casper.test.begin('Courses view (student courses)', 10, function suite(test) {

    mockData = {

        'courses': [
            { id: 11, name: 'Course 1', exercises: [ {}, {} ], amountOfStudents: 4 },
            { id: 12, name: 'Course 2', exercises: [ {}, {}, {} ], amountOfStudents: 5 },
            { id: 13, name: 'Course 3', exercises: [ {}, {}, {}, {} ], amountOfStudents: 6 },
            { id: 14, name: 'Course 4', exercises: [ {}, {}, {}, {} ], amountOfStudents: 7 }
        ],

        'students': [
            { id: 21, name: 'Student 1', courses: [ {}, {} ] },
            { id: 22, name: 'Student 2', courses: [ {}, {}, {} ] },
            { id: 23, name: 'Student 3', courses: [ {}, {}, {}, {} ] }
        ],

        'students/22': { id: 22, name: 'Student 2', courses: [ {}, {}, {} ] },

        'students/22/courses': [
            { id: 11, name: 'Course 1', exercises: [ {}, {} ], amountOfStudents: 4 },
            { id: 13, name: 'Course 3', exercises: [ {}, {}, {}, {} ], amountOfStudents: 6 },
            { id: 14, name: 'Course 4', exercises: [ {}, {}, {}, {} ], amountOfStudents: 7 }
        ]
    };

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

        test.assertEquals($('tr:contains(Course 1)').find(':nth-child(3)').html(), '2', 'has exercise count 2 for "Course 1"');
        test.assertEquals($('tr:contains(Course 3)').find(':nth-child(3)').html(), '4', 'has exercise count 4 for "Course 3"');
        test.assertEquals($('tr:contains(Course 3)').find(':nth-child(3)').html(), '4', 'has exercise count 4 for "Course 4"');
    });

    casper.run(function () {

        this.echo('');
        test.done();
    });
});
