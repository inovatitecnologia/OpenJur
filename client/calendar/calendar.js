defaultRoutes.route('/calendar', {
    name: 'default.calendar',
    action: function() {
        ContentGlobalVars.setContentHeader('Minha agenda');
        ContentGlobalVars.setContentHeaderTip('Controle seus compromissos nessa agenda.');
        ContentGlobalVars.setBreadcrumbs([
            {
                iconClass: 'fa fa-calendar', 
                text: 'Painel de controle', 
                href: FlowRouter.url('default.calendar')
            }
        ]);
        BlazeLayout.render(this.group.options.layout, {content: 'calendar'});
    }
});

Template.calendar.helpers({
    options: function () {
        return {
            header: {
                right: 'month ,agendaWeek, agendaDay, today, prev, next'
            },
            lang: 'pt-br'
        }
    }
});