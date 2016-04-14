Meteor.publish("users", function () {
    return Meteor.users.find({}, {
        fields: {
            'profile.name': 1,
            'createdAt': 1,
            'services.google.picture': 1,
            'services.google.name': 1
        }
    });
});