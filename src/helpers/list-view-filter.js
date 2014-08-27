codebrowser.helper.ListViewFilter = function (options, collection) {

    var _module = {},
        _containerSelector = 'body',
        _searchInputSelector = 'input[data-id="query-string"]',
        _filteredCollection = _.extend(new Backbone.Collection(), collection);

    var initialise = function (options) {

        if (options) {

            _searchInputSelector = options.searchInputSelector || _searchInputSelector;
            _containerSelector = options.containerSelector || _containerSelector;
        }
    }

    /* Module */

    _module.filter = function () {

        var query = $(_containerSelector).find(_searchInputSelector)
                                         .val()
                                         .trim()
                                         .toLowerCase();

        // Filter collection
        var results = collection.filter(function (item) {

            var name = item.get('name').toLowerCase();
            return name.indexOf(query) !== -1;
        });

        // Set filtered results to filtered collection
        _filteredCollection.reset(results);

        return {

            filteredCollection: _filteredCollection,
            query: query

        }
    }

    initialise(options);
    return _module;
}
