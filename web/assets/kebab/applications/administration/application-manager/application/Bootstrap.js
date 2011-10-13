/**
 * Kebab Application Bootstrap Class
 *
 * @category    Kebab
 * @package     Applications
 * @namespace   KebabOS.applications.applicationManager.application
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
Ext.extend(KebabOS.applications.applicationManager.application.Bootstrap, Kebab.OS.Application, {

    createApplication : function() {

        // desktop width and heigth
        var desktop = this.app.getDesktop();
        var app = desktop.getApplication(this.id);

        if (!app) {

            // Default layout
            this.layout = new KebabOS.applications.applicationManager.application.layouts.Layout({
                bootstrap: this
            });

            // Default controlller
            this.defaultController = new KebabOS.applications.applicationManager.application.controllers.Index({
                bootstrap: this
            });

            // create window
            app = desktop.createApplication({
                id: this.id,
                title: this.title.text,
                description: this.title.description,
                iconCls: 'applicationManager-application-gui-icon',
                width: 850,
                height: 500,
                border:false,
                items: this.layout
            });

        }
        app.show();
    }
});
