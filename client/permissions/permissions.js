
defaultRoutes.route('/configuration/permissions/:userDocId', {
    name: 'default.permissions',
    subscriptions: function() {
        Meteor.subscribe('users');
    },
    action: function(params) {
        ContentGlobalVars.setContentHeader('Configurar permissões de acesso');
        ContentGlobalVars.setContentHeaderTip('Aqui você pode configurar as permissões de acesso do usuário.');
        ContentGlobalVars.setBreadcrumbs([
            {
                iconClass: 'fa fa-cog',
                text: 'Configurações',
                href: FlowRouter.url('default.configuration')
            },
            {
                iconClass: 'fa fa-shield',
                text: 'Permissões do usuário',
                href: FlowRouter.url('default.permissions', { userDocId: FlowRouter.getParam('userDocId') })
            }
        ]);

        BlazeLayout.render(this.group.options.layout, {content: 'permissions'});
    }
})


Template.permissions.helpers({
    userFullName: function() {
        return Meteor.users.findOne({_id: FlowRouter.getParam('userDocId')}).profile.full_name;
    }
});


Template.permissions.events({
    'click #updatePermissions': function() {
        var selected = $('#permissionsTree').jstree(true).get_selected();
        Meteor.call('updatePermissions', FlowRouter.getParam('userDocId'), selected, function(error, result) {
            if (error) {
                FlashMessages.sendError('Erro ao tentar atualizar as permissões.');
            } else {
                FlashMessages.sendSuccess('Permissões atualizadas com sucesso.');
            }
        });
    }
});

Template.permissions.rendered = function() {
    var listOfRoles = RolesTree.getListOfRoles();

    var userRoles = Meteor.users.findOne({_id: FlowRouter.getParam('userDocId')}).roles;

    var listForTree = [];
    _.each(listOfRoles, function(element, index, list) {

        if (!element.parentKey) {
            parent = '#';
        } else {
            parent = element.parentKey;
        }

        var selected = false;
        if (userRoles.__global_roles__.indexOf(element.key) > -1) {
            selected = true;
        }

        var disabled = false;
        if (element.key == 'root' && userRoles.__global_roles__.indexOf('root') == -1) {
            disabled = true;
        }

        listForTree.push({
            "id": element.key,
            "parent": parent,
            "text": "(" + element.name + "): " + element.description,
            "state": {
                opened    : true, // is the node open
                disabled  : disabled, // is the node disabled
                selected  : selected
            }
        });
    });

    $('#permissionsTree').jstree({
        "plugins" : [ "checkbox", "wholerow" ],
        'core' : {
            'data' : listForTree
        }
    });
}
