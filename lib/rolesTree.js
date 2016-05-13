
RolesTree = {
    _precessedRoles: undefined,

    processAllRoles: function() {
        // return {
        //     root: {
        //         name: TAPi18n.__('roles.root.name'),
        //         description: TAPi18n.__('roles.root.description')
        //     },
        //     system_administrator: {
        //         name: TAPi18n.__('roles.system_administrator.name'),
        //         description: TAPi18n.__('roles.system_administrator.description'),
        //         sub_roles:
        //             users_manager: {
        //                 name: TAPi18n.__('roles.users_manager.name'),
        //                 description: TAPi18n.__('roles.users_manager.description'),
        //             },
        //             configuration_manager: {
        //                 name: TAPi18n.__('roles.configuration_manager.name'),
        //                 description: TAPi18n.__('roles.configuration_manager.description'),
        //             }
        //     }
        // };

        this._precessedRoles = [
            {
                key: 'root',
                name: TAPi18n.__('roles.root.name'),
                description: TAPi18n.__('roles.root.description')
            },
            {
                key: 'system_administrator',
                name: TAPi18n.__('roles.system_administrator.name'),
                description: TAPi18n.__('roles.system_administrator.description'),
            },
            {
                key: 'users_manager',
                name: TAPi18n.__('roles.users_manager.name'),
                description: TAPi18n.__('roles.users_manager.description'),
                parentKey: 'system_administrator'
            },
            {
                key: 'configuration_manager',
                name: TAPi18n.__('roles.configuration_manager.name'),
                description: TAPi18n.__('roles.configuration_manager.description'),
                parentKey: 'system_administrator'
            }

        ];

        this._makeChildren();
    },

    getListOfRoles: function() {
        if (!this._precessedRoles) {
            this.processAllRoles();
        }
        return this._precessedRoles;
    },

    getRole: function(roleKey) {

        // var recursiveSearch = function(obj) {
        //     if (obj.sub_roles) {
        //         _.filter(roleKey, recursiveSearch(obj.sub_roles);
        //     }
        //     return _.where(obj.key, {id: ID_TO_FIND}).length > 0;
        // }
        if (!this._precessedRoles) {
            this.processAllRoles();
        }

        return _.findWhere(this._precessedRoles, {key: roleKey});
    },

    _makeChildren: function() {

        _.each(this._precessedRoles, function(elementA, indexA, listA) {
            _.each(this._precessedRoles, function(elementB, indexB, listB) {
                    if (!elementB.parentKey) {
                        return; // like continue for the function _.each
                    }
                    if (elementA.key == elementB.parentKey) {
                        this._precessedRoles[indexA].children.push(elementB.key);
                    }
            })
        });
    }
}
