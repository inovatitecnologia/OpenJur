
Accounts.onCreateUser(function(options, user){
    /*if (user.email) {

    }*/
    var roles = {};

    if (options.username == 'root') {
        roles[Roles.GLOBAL_GROUP] = ['root'];
    }
    user.roles = roles;

    if (options.profile) user.profile = options.profile;

    if (user.services) {
          var service = _.keys(user.services)[0];
          var email = user.services[service].email;
          var verified_email = user.services[service].verified_email;

          if (service == 'github') {
              if (!user.profile)
                  user.profile = {};
              if (!user.profile.name)
                  user.profile.name = user.services[service].username;
          }

          if (!email) {
              return user;
          } else {
            // see if any existing user has this email address, otherwise create new
            var existingUser = Meteor.users.findOne({'emails.address': email});
            if (existingUser) throw new Meteor.Error(403, "E-mail já existe. Entre na conta existente com login e senha e adicione o serviço do Google ao seu perfil.");
          }

          user.emails = [ { "address" : email, "verified" : verified_email} ];

          // precaution, these will exist from accounts-password if used
          // if (!existingUser.services)
          //     existingUser.services = { resume: { loginTokens: [] }};
          // if (!existingUser.services.resume)
          //     existingUser.services.resume = { loginTokens: [] };

          // // copy across new service info
          // existingUser.services[service] = user.services[service];
          // existingUser.services.resume.loginTokens.push(
          //     user.services.resume.loginTokens[0]
          // );

          // // even worse hackery
          // Meteor.users.remove({_id: existingUser._id}); // remove existing record
          // return existingUser;                          // record is re-inserted
    }

    return user;
});


Meteor.methods({
    upsertGoogleServiceAPI: function(data) {
        ServiceConfiguration.configurations.upsert(
          { service: "google" },
          {
            $set: {
              service: "google",
              clientId: data.clientId,
              secret: data.secret
            }
          }
        );
    }
})
