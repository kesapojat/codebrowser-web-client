Handlebars.registerHelper('eventName', function (event) {

    var eventName = event.split('_')[1];

    return eventName.charAt(0).toUpperCase() + eventName.slice(1);
});
