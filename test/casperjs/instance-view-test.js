casper.test.begin('Instance view', 3, function suite(test) {

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
        ]
    });

    casper.start('http://localhost:8000');

    casper.then(function() {

        this.clickLabel('instance', 'a');
        this.waitForSelector('#instance-container');
    });

    casper.then(function () {

        test.assertUrlMatch(new RegExp('/#/instance$'), 'has correct URL');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/instance/students">') !== -1, 'has a correct link to students');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/instance/courses">') !== -1, 'has a correct link to course list');
    });

    casper.run(function () {

        this.echo('');
        test.done();
    });
});
