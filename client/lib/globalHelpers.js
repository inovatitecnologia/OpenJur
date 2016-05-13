Template.registerHelper('versionOpenJur', function() {
    return '0.2.0-alpha';
});


Meteor._t = function(key, options) {
    return TAPi18n.__(key, options, lang_tag='pt-BR');
}
//
// Template.registerHelper('_t', function(key, options) {
//     return Meteor._t(key, options);
// });

Template.registerHelper('currentUserName', function() {
    if (Meteor.user()) {
        if (Meteor.user().profile.full_name) {
            return Meteor.user().profile.full_name
        } else if (!Meteor.user().services) {
            return Meteor.user().name;
        } else {
            if (Meteor.user().services.google) {
                return Meteor.user().services.google.name;
            }
        }

        return Meteor.user().profile.full_name;
    }

    return false;
});

Template.registerHelper('currentUserSignupDate', function() {
    if (Meteor.user()) {
        moment.locale('pt_br');
        var date = new Date(Meteor.user().createdAt);

        return moment(date).format('L');
    }

    return false;
});

Template.registerHelper('hasLinkWithGoogle', function() {
    return Meteor.hasLinkWithGoogle();
});

Meteor.hasLinkWithGoogle = function() {
    if (ServiceConfiguration.configurations.find({service: 'google'}).count() > 0) {
        return true;
    }

    return false;
};
