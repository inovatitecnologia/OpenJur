Template.registerHelper('versionOpenJur', function() {
    return '0.1.0-alpha';
});

Template.registerHelper('currentUserName', function() {
    if (Meteor.user().services) {
        //if (Meteor.user().services.google) {
            return Meteor.user().services.google.name;
        //}
    }
    
    return Meteor.user().profile.name;
});

Template.registerHelper('currentUserSignupDate', function() {
    moment.locale('pt_br');
    var date = new Date(Meteor.user().createdAt);

    return moment(date).format('L');
});