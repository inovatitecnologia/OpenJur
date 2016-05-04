defaultRoutes.route('/dashboard', {
    name: 'default.dashboard',
    action: function() {
        ContentGlobalVars.setContentHeader('Painel de controle');
        ContentGlobalVars.setContentHeaderTip('Visualize aqui o que está acontecendo agora.');
        ContentGlobalVars.setBreadcrumbs([
            {
                iconClass: 'fa fa-dashboard', 
                text: 'Painel de controle', 
                href: FlowRouter.url('default.dashboard')
            }
        ]);
        BlazeLayout.render(this.group.options.layout, {content: 'dashboard'});
    }
});