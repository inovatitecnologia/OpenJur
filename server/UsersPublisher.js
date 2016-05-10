/*
    users

    Use only when you want information about more than one user.
*/
Meteor.publish("users", function () {
    return Meteor.users.find({}, {
        fields: {
            'profile.name': 1,
            'profile.full_name': 1,
            'createdAt': 1,
            'services.google.picture': 1,
            'services.google.name': 1
        }
    });
});

/*
    currentUser

    Use only when you want more profile data.
*/
Meteor.publish("currentUser", function () {
    return Meteor.users.find({ _id: this.userId }, {
        fields: {
            'profile': 1,
            'createdAt': 1,
            'services.google.picture': 1,
            'services.google.name': 1
        }
    });
});
