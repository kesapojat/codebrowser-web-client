codebrowser.view.ListBaseView = Backbone.View.extend({

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

        var output = this.renderTemplate(),
            filteredList = $(output).find('table');

        this.$el.find('table').replaceWith(filteredList);
    },

    /* Filter */

    filterListByName: function () {

        if (!this.filterHelper) {
            this.filterHelper = new codebrowser.helper.ListViewFilter({ 'containerSelector': '#' + this.id }, this.collection);
        }

        var result = this.filterHelper.filter();

        this.collection = result.filteredCollection;
        this.query = result.query;

        this.update();
    }
});
