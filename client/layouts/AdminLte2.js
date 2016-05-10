ContentGlobalVars = {
    setContentHeader: function(value) {
        Session.set('contentHeader', value);
    },
    getContentHeader: function() {
        return Session.get('contentHeader');
    },
    setContentHeaderTip: function(value) {
        Session.set('contentHeaderTip', value);
    },
    getContentHeaderTip: function() {
        return Session.get('contentHeaderTip');
    },
    setBreadcrumbs: function(value) {
        Session.set('breadcrumbs', value);
    },
    getBreadcrumbs: function() {
        return Session.get('breadcrumbs');
    },
}


Template.registerHelper('contentHeader', function() {
    return ContentGlobalVars.getContentHeader();
});

Template.registerHelper('contentHeaderTip', function() {
    return ContentGlobalVars.getContentHeaderTip();
});

Template.registerHelper('breadcrumbs', function() {
    return ContentGlobalVars.getBreadcrumbs();
});
