codebrowser.model.AuthorisationError = function () {

    this.name = 'AuthorisationError';
    this.message = 'Not authenticated.';
    this.stack = (new Error()).stack;
}

codebrowser.model.AuthorisationError.prototype = Object.create(Error.prototype);
codebrowser.model.AuthorisationError.prototype.name = 'AuthorisationError';
