Handlebars.registerHelper('pluralise', function (value, string) {

    if (value === 1) {
        return string;
    }

    return string + 's';
});
