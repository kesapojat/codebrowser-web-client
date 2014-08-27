codebrowser.view.BaseView = Backbone.View.extend({

    events: {

        'click [data-action="search"]': 'filterListByName',
        'keyup [data-id="query-string"]': 'filterListByName'

    },

    /* Render */

    render: function () {

        // Template
        var output = this.renderTemplate();

        this.$el.html(output);

        // Bind events also on re-render
        this.delegateEvents();
    },

    update: function () {

        // Template
        var output = this.renderTemplate();

        var filteredList = $(output).find('table');

        this.$el.find('table').replaceWith(filteredList);
    },

    /* Filter */

    filterListByName: function () {

        if (!this.filterHelper) {

            var filterOptions = {

                'containerSelector' : '#' + this.id
            }

            this.filterHelper = new codebrowser.helper.ListViewFilter(filterOptions, this.collection);
        }

        var result = this.filterHelper.filterList();

        this.collection = result.filteredCollection;
        this.query = result.query;

        this.update();
    }
});
