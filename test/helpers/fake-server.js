/* exported FakeServer */

var FakeServer = (function () {

    var _module = {},
        _mockData = {};

    /* Helper function that creates a Sinon fake server and registers mock responses for given paths.
     * If mockData value is a number then it is used as the HTTP status code. If it is a string then
     * the response type is text/plain, otherwise application/json. */

    var createFakeServer = function (mockData) {

        var server = sinon.fakeServer.create();
        server.autoRespond = true;

        // Prints a warning if the request does not match any registered paths
        server.respondWith(function (request) {

            throw new Error('No mock data for request: '  + JSON.stringify(request.url));
        });

        for (var path in mockData) {

            // Match URLs that have same root and path and optional query string in the end
            var prefix = path.indexOf('http://') !== -1 ? '' : config.api.main.root,
                urlPattern = new RegExp(prefix + path + '(\\?.*)?$'),
                contentType = typeof mockData[path] === 'string' ? 'text/plain' : 'application/json',
                code = typeof mockData[path] === 'number' ? mockData[path] : 200;

            server.respondWith(urlPattern, [ code, { 'Content-Type': contentType }, JSON.stringify(mockData[path]) ]);
        }
    }

    /* Setup for Casper tests */

    if (typeof casper !== 'undefined') {

        // Redirects CasperJS’s browser console to main console
        casper.on('remote.message', console.log.bind(console));

        casper.options.waitTimeout = config.test.async.timeout;
        casper.options.verbose = true;

        // Skip suite after one test fails
        casper.on('step.error', function () {

            casper.test.skip(0, 'Skipping rest of the test suite.');
            casper.test.done();
        });

        var hasErrors;

        // Notify about script errors on current page
        casper.on('page.error', function (message) {

            hasErrors = true;
            casper.warn('Script error on page: ' + message);
        });

        // Executed after page load, but before any scripts
        casper.on('page.initialized', function () {

            // CasperJS loads about:blank after failed suites. Creating the fake server would fail
            if (this.getCurrentUrl() === 'about:blank') {
                return;
            }

            // Injects Sinon’s code into CasperJS’s browser.
            casper.page.injectJs('./node_modules/sinon/pkg/sinon.js');

            // To catch all requests made by Code Browser, the fake server must be created before
            // $(document).ready() is triggered. However, creating Sinon server in page.initialized
            // does not work, so the only way is to register our own handler before anyone else’s.
            casper.evaluate(function (createFakeServer, mockData) {

                document.addEventListener('DOMContentLoaded', function () {

                    createFakeServer(mockData);
                });

            }, createFakeServer, _mockData);

            // Make sure each test run starts from clean state (no cache etc.)
            if (config.test.casperjs.clearLocalStorage) {

                casper.evaluate(function () {

                    localStorage.clear();
                });
            }
        });

        // Executed before each test suite
        casper.test.setUp(function () {

            hasErrors = false;
        });

        // Executed only after successful test suites
        casper.on('run.complete', function () {

            if (hasErrors) {
                casper.test.fail('Page has no script errors.');
            }
        });

        // Executed after each test suite.
        casper.test.tearDown(function () {

            _mockData = {};
            casper.echo('');
        });
    }

    /* Setup for Jasmine tests */

    if (typeof jasmine !== 'undefined') {

        localStorage.clear();

        // Just ignore all requests during page load
        $(document).ready(function () {

            createFakeServer({ '.*': 404 });
        });

        beforeEach(function () {

            // Without changing route Backbone.history.start() may fetch models used in previous specs
            Backbone.history.navigate('_'); // use a non-existant route
            createFakeServer(_mockData);
        });

        afterEach(function () {

            createFakeServer({});
        });
    }

    /* Module */

    _module.return = function (mockData) {

        _mockData = mockData;
    }

    return _module;
})();
