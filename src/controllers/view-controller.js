codebrowser.controller.ViewController = {

    view: null,
    userMenuView: new codebrowser.view.UserMenuView(),

    initialize: function () {

        // User menu
        this.userMenuView.render();

        $('#user-menu-container').html(this.userMenuView.el);
    },

    isActive: function (view) {

        return this.view === view;
    },

    /* Actions */

    update: function () {

        this.userMenuView.update();
    },

    push: function (view, render) {

        // Already active
        if (this.isActive(view)) {

            if (render) {
                this.view.render();
            }

            return;
        }

        // Remove previous view
        if (this.view) {
            this.view.remove();
        }

        this.view = view;

        // Should render view
        if (render) {
            this.view.render();
        }

        // Set to container
        $(config.view.container).html(this.view.el);
    }
}
