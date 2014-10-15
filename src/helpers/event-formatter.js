Handlebars.registerHelper('eventName', function (event) {

    var eventName = event.split('_')[1];

    return eventName.charAt(0).toUpperCase() + eventName.slice(1);
});

Handlebars.registerHelper('eventLabel', function (event) {

    var labelType = {

        'text_insert': 'success',
        'text_remove': 'danger',
        'text_paste': 'primary',
        'code_snapshot': 'default'

    }

    return labelType[event];
});
