codebrowser.view.BaseView = Backbone.View.extend({

    events: {

        'click [data-action="search"]': 'filterListByName',
        'keyup [data-id="query-string"]': 'filterListByName',
        'keypress [data-id="query-string"]': 'filterListByName'

    },

    filterListByName: function () {

        if (!this.filterHelper) {

            var filterOptions = {

                'containerSelector' : '#' + this.id
            }

            this.filterHelper = new codebrowser.helper.ListViewFilter(filterOptions);
        }

        this.filterHelper.filterList();
    }
});