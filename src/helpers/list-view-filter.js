codebrowser.helper.ListViewFilter = function (options) {

    // Default selector for elements to filter
    this.rowSelector = 'tbody tr';

    // Default selector inside single element
    this.targetCellSelector = 'td:eq(1) a';

    // Default where to find search input string
    this.searchInputSelector = 'input[data-id="query-string"]';

    // Default container element selector
    this.containerSelector = 'body';

    if (options) {

        this.rowSelector = options.rowSelector || this.rowSelector;
        this.targetCellSelector = options.targetCellSelector || this.targetCellSelector;
        this.searchInputSelector = options.searchInputSelector || this.searchInputSelector;
        this.containerSelector = options.containerSelector || this.containerSelector;
    }

    this.filterList = function () {

        var query = this._getQueryString().toLowerCase();

        var $tableRows = $(this.containerSelector).find(this.rowSelector);

        var that = this;

        // First show all and clean highlights
        $tableRows.each(function() {

            $(this).show();

            var cell =  $(this).find(that.targetCellSelector);
            var cellText = cell.text();

            cell.html(_.escape(cellText));
        });

        if (query !== '') {

            $tableRows.each(function() {

                var $nameCell = $(this).find(that.targetCellSelector);

                if ( that._nodeTextContains($nameCell, query) ) {

                    that._highlightMatch($nameCell, query);
                } else {

                    $nameCell.text( $nameCell.text() );
                    $(this).hide();
                }
            });
        }
    };

    this._getQueryString = function () {

        return $(this.containerSelector).find(this.searchInputSelector).val().trim();
    };

    this._nodeTextContains = function ($node, query) {

        return $node.text().toLowerCase().indexOf(query) !== -1;
    };

    this._highlightMatch = function ($node, query) {

        // Wrap matched part of nodes text in span
        var text = $node.text();
        var index = text.toLowerCase().indexOf(query);
        var length = query.length;

        var highlighted = _.escape(text.substring(0, index)) + '<span class="search-highlight">' +
                          _.escape(text.substring(index, index + length)) + '</span>' + _.escape(text.substring(index + length));

        $node.html(highlighted);
    };
};
