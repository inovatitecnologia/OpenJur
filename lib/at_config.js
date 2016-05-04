AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    //forbidClientAccountCreation: true,
    // overrideLoginErrors: true,
    sendVerificationEmail: true,
    lowercaseUsername: true,
    focusFirstInput: true,

    // // Appearance
    // showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: true,

    // // Client-side Validation
    // continuousValidation: false,
    // negativeFeedback: false,
    // negativeValidation: true,
    // positiveValidation: true,
    // positiveFeedback: true,
    showValidating: true,

    // // Privacy Policy and Terms of Use
    privacyUrl: '/politica_de_privacidade',
    termsUrl: '/termos_de_uso',

    // // Redirects
    homeRoutePath: '/default/dashboard',
    redirectTimeout: 4000,

    // Hooks
    onLogoutHook: function() {
      FlowRouter.go('/accounts/login');
    },
    // onSubmitHook: function(error, state) {

    //     LoaderObject.show();
    //     if (!error && state) {

    //       if (state == 'signIn') {
    //           Flash.send('success', 'Bem vindo de volta Sr(a). ' + Meteor.user().profile.nome);
    //           FlowRouter.go('app.home');
    //       }

    //       if (state == 'signUp') {
    //           Flash.send('success', 'Seja bem vindo ao Inovati Network Sr(a). '
    //             + Meteor.user().profile.nome + '.'
    //             + ' Verifique seu email e siga as instruções para ativação da conta.');
    //           FlowRouter.go('app.home');
    //       }

    //       if (state == 'changePwd') {
    //           Flash.send('success', 'Senha alterada com sucesso. Sr(a). ' + Meteor.user().profile.nome);
    //           FlowRouter.go('app.home');
    //       }

    //       if (state == 'forgotPwd') {
    //           Flash.send('success', 'Enviamos um email com as instruções de reset de senha.');
    //           FlowRouter.go('app.home');
    //       }


    //       if (state == 'resendVerificationEmail') {
    //           Flash.send('success', 'Enviamos um email com as instruções de confirmação de email.');
    //           FlowRouter.go('app.home');
    //       }

    //       if (state == 'resetPwd') {
    //           Flash.send('success', 'Senha alterada com sucesso.');
    //           FlowRouter.go('app.home');
    //       }

    //     } else {
    //         LoaderObject.hide();
    //     }
    // },
    // preSignUpHook: myPreSubmitFunc,
    // postSignUpHook: myPostSubmitFunc,

    // Texts
    // texts: {
    //   button: {
    //       signUp: "Register Now!"
    //   },
    //   socialSignUp: "Register",
    //   socialIcons: {
    //       "meteor-developer": "fa fa-rocket"
    //   },
    //   title: {
    //       forgotPwd: "Recover Your Password"
    //   },
    // },
});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 4,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      regEx: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Email invalido',

  },
  {
      _id: 'username_and_email',
      type: 'text',
      required: true,
      displayName: "Login",
      placeholder: 'Usuário ou email'
  },
  pwd,
  {
      _id: 'full_name',
      placeholder: {
          signUp: "Ex.: Fulano da Silva"
      },
      required: true,
      type: 'text',
      displayName: "Nome completo",
      //func: function(value){return value !== 'Full Name';},
      //errStr: 'Only "Full Name" allowed!',
  }
]);

// AccountsTemplates.addField({
//     _id: 'name',
//     placeholder: {
//         signUp: "Ex.: Fulano da Silva"
//     },
//     required: true,
//     type: 'text',
//     displayName: "Nome completo",
//     //func: function(value){return value !== 'Full Name';},
//     //errStr: 'Only "Full Name" allowed!',
// });



AccountsTemplates.configureRoute('changePwd', {
  name: 'changepwd',
  path: 'accounts/changepassword',
  template: 'user_accounts',
  layoutTemplate: 'user_accounts',
  layoutRegions: {},
  // contentRegion: 'main'
});
AccountsTemplates.configureRoute('forgotPwd', {
  name: 'forgotpwd',
  path: 'accounts/forgotpassword',
  template: 'user_accounts',
  layoutTemplate: 'user_accounts',
  layoutRegions: {},
  // contentRegion: 'main'
});
AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetpwd',
  path: 'accounts/resetpassword',
  template: 'user_accounts',
  layoutTemplate: 'user_accounts',
  layoutRegions: {},
  // contentRegion: 'main'
});
AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: 'accounts/login',
  template: 'user_accounts',
  layoutTemplate: 'user_accounts',
  layoutRegions: {},
  // contentRegion: 'main'
});
AccountsTemplates.configureRoute('signUp', {
  name: 'signup',
  path: 'accounts/signup',
  template: 'user_accounts',
  layoutTemplate: 'user_accounts',
  layoutRegions: {},
  // contentRegion: 'main'
});
AccountsTemplates.configureRoute('verifyEmail', {
  name: 'verifyemail',
  path: 'accounts/verifyemail',
  template: 'user_accounts',
  layoutTemplate: 'user_accounts',
  layoutRegions: {},
  // contentRegion: 'main'
});


// Accounts.ui.config({
//   requestPermissions: {
//     facebook: ['user_likes'],
//     github: ['user', 'repo']
//   },
//   requestOfflineToken: {
//     google: true
//   },
//   passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
// });
