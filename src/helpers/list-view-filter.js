codebrowser.helper.ListViewFilter = function (options, collection) {

    this.filteredCollection = new Backbone.Collection();

    // Default where to find search input string
    this.searchInputSelector = 'input[data-id="query-string"]';

    // Default container element selector
    this.containerSelector = 'body';

    if (options) {

        this.searchInputSelector = options.searchInputSelector || this.searchInputSelector;
        this.containerSelector = options.containerSelector || this.containerSelector;
    }

    this.filterList = function () {

        var query = this._getQueryString().toLowerCase();

        // Filter collection
        var results = collection.filter(function (item) {

            var name = item.get('name').toLowerCase();

            return name.indexOf(query) !== -1;
        });

        // Set filtered results to filtered collection
        this.filteredCollection.reset(results);

        return {

            filteredCollection : this.filteredCollection,
            query : query
        }
    },

    this._getQueryString = function () {

        return $(this.containerSelector).find(this.searchInputSelector).val().trim();
    }
};
