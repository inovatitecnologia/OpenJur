defaultRoutes.route('/configuration', {
    name: 'default.configuration',
    subscriptions: function() {
        Meteor.subscribe('users');
    },
    action: function() {
        ContentGlobalVars.setContentHeader('Configurações do sistema');
        ContentGlobalVars.setContentHeaderTip('Aqui você pode configurar o sistema.');
        ContentGlobalVars.setBreadcrumbs([
            {
                iconClass: 'fa fa-cog',
                text: 'Configurações',
                href: FlowRouter.url('default.configuration')
            }
        ]);
        BlazeLayout.render(this.group.options.layout, {content: 'configuration'});
    }
});

Template.configuration.events({
    'submit #upsertGoogleServiceAPI': function (e) {
        e.preventDefault();

        //inputs.push({e.target[0].value});
        // Meteor.call('upsertGoogleServiceAPI', , function (error, result) {

        // });
    },
    'click .alterPermission': function(e) {
        var data = $(e.currentTarget).data();
        FlowRouter.go('default.permissions', {userDocId: data.idUser});
    }
});

Template.configuration.helpers({
    usersCollection: function () {
        return Meteor.users.find();
    },
    googleClientId: function() {
        return ServiceConfiguration.configurations.find().fetch()[0].clientId;
    },
    settingsUsersTable: {
        fields: [
            { key: 'username', label: 'Usuário' },
            { key: 'profile.full_name', label: 'Nome' },
            {
                key: 'roles', label: 'Permissões', sortable: false,
                tmpl: Template._listOfRoles
            },
            {
                key: '_id',
                label: 'Ações',
                fn: function(value) { return Spacebars.SafeString('<button class="btn btn-success alterPermission" data-id-user="' + value + '" title="Alterar permissões"><i class="fa fa-share-alt"></i></button>') }
            },
        ]
    },
    serviceGoogleAPISchema: function() {
        return new SimpleSchema({
            clientId: {
                type: String,
                label: 'Client ID'
            },
            secret: {
                type: String,
                label: 'Secret'
            },
        });
    }
});
