defaultRoutes = FlowRouter.group({
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    subscriptions: function() {
        Meteor.subscribe('users');
    },
    layout: 'AdminLte2',
    prefix: '/default',
    name: 'default'
});

FlowRouter.route('/', {
    action: function(params, queryParams) {
        //console.log(params, queryParams);
        FlowRouter.go('default.dashboard');
    }
});

