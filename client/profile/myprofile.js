defaultRoutes.route('/myprofile', {
    name: 'default.myprofile',
    subscriptions: function() {
        Meteor.subscribe('currentUser');
    },
    action: function() {
        ContentGlobalVars.setContentHeader('Meu perfil de usuário');
        ContentGlobalVars.setContentHeaderTip('Defina aqui seus dados pessoais.');
        ContentGlobalVars.setBreadcrumbs([
            {
                iconClass: '',
                text: 'Meu perfil',
                href: FlowRouter.url('default.configuration')
            }
        ]);
        BlazeLayout.render(this.group.options.layout, {content: 'myprofile'});
    }
});


Template.myprofile.helpers({
    userDoc: function() {
        return Meteor.users.find().fetch()[0];
    },
    datepickerOptions: {
        language: "pt-BR"
    },
    genderOptions: [
        {
            value: 'undefined',
            label: 'Indefinido'
        },
        {
            value: 'male',
            label: 'Masculino'
        },
        {
            value: 'female',
            label: 'Feminino'
        },
    ]
});

Template.myprofile.rendered = function() {

    // tinymce.init({
    //     selector: '.textareaWithTinyMCE',
    //     skin_url: '/packages/teamon_tinymce/skins/lightgray',
    // });

    $('.textareaWithTinyMCE').wysihtml5();
}

AutoForm.addHooks('updateProfileData', {
    after: {
        update: function(error, result) {

            if (!error) {
                console.log(result);
                FlashMessages.sendSuccess('Perfil atualizado com sucesso.');
            } else {
                FlashMessages.sendError('Não foi possível atualizar os dados do perfil.');
            }

        },
    },
});
