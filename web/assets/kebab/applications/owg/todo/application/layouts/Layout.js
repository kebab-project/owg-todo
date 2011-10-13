/**
 * Kebab Application Bootstrap Class
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.todo.application.layouts
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabOS.applications.todo.application.layouts.Layout = Ext.extend(Ext.grid.GridPanel, {

    // Application bootstrap
    bootstrap: null,

    initComponent: function() {

        this.grid = new KebabOS.applications.todo.application.views.Grid({
            bootstrap: this.bootstrap
        });

        var config = {
            layout:'fit',
            items : this.grid
        }

        Ext.apply(this, config);

        KebabOS.applications.todo.application.layouts.Layout.superclass.initComponent.call(this);
    }
});
