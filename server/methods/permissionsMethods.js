Meteor.methods({
    'updatePermissions': function(userId, roles) {
        var result = Meteor.users.update(
            {
                '_id': userId
            },
            {
                $set: {
                    roles: {
                        '__global_roles__': roles
                    }
                }
            }/*,
            function(error, result) {
                if (error) {
                    console.log(error);
                    throw new Meteor.error(error);
                }
            }*/
        );
        return result;
    }
});
