casper.test.begin('Root view', 3, function suite(test) {

    FakeServer.return({

        '': [
            { id: 'hy', name: 'hy' },
            { id: 'mooc', name: 'mooc' }
        ]
    });

    casper.start('http://localhost:8000');

    casper.then(function () {

        test.assertTitle('Code Browser', 'has a correct title');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/hy">') !== -1, 'has a correct link to hy instance');
        test.assertTruthy(this.getHTML().indexOf('<a href="./#/mooc">') !== -1, 'has a correct link to mooc instance');
    });

    casper.run(function () {

        this.echo('');
        test.done();
    });
});
