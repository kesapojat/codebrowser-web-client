describe('Instance router', function () {

    beforeEach(function () {

        FakeServer.return({

            '': [
                { id: 'test', name: 'test' }
            ],

            'instance': { id: 'test', name: 'test' }

        });

        Backbone.history.stop();
    });

    it('calls instance function', function () {

        spyOn(codebrowser.router.InstanceRouter.prototype, 'instance');

        var router = new codebrowser.router.InstanceRouter();

        Backbone.history.start();
        router.navigate('#/instance/', true);

        expect(codebrowser.router.InstanceRouter.prototype.instance).toHaveBeenCalled();
    });
});
