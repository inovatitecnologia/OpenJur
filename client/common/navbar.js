Template.navbar.events({
    'click #linkWithGoogle': function(e) {
        if (Meteor.hasLinkWithGoogle()) {
            Meteor.linkWithGoogle();
        }
    }
});
