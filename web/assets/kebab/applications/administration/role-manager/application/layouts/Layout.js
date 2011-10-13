/**
 * Kebab Application Bootstrap Class
 *
 * @category    Kebab
 * @package     Applications
 * @namespace   KebabOS.applications.roleManager.application.layouts
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabOS.applications.roleManager.application.layouts.Layout = Ext.extend(Ext.TabPanel, {

    // Application bootstrap
    bootstrap: null,

    initComponent: function() {
        // panels are defined here
        this.roleGrid = new KebabOS.applications.roleManager.application.views.RoleGrid({
            bootstrap: this.bootstrap,
            title: Kebab.helper.translate('Roles'),
            iconCls: 'icon-application-view-list',
            border:false
        });

        var config = {
            items:this.roleGrid,
            activeTab: 0
        }

        Ext.apply(this, config);

        KebabOS.applications.roleManager.application.layouts.Layout.superclass.initComponent.call(this);
    }
});
