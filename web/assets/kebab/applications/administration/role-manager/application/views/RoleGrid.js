/**
 * roleManager Application RoleGrid class
 *
 * @category    Kebab
 * @package     Applications
 * @namespace   KebabOS.applications.roleManager.application.views
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabOS.applications.roleManager.application.views.RoleGrid = Ext.extend(Kebab.library.ext.ComplexEditorGridPanel, {

    // Application bootstrap
    bootstrap: null,

    initComponent: function() {

        // json data store
        this.dataStore = new KebabOS.applications.roleManager.application.models.RoleDataStore({
            bootstrap:this.bootstrap
        });

        this.extraTbarButtons = this.buildExtraTbarButtonsData();

        this.addEvents('roleSelected');

        KebabOS.applications.roleManager.application.views.RoleGrid.superclass.initComponent.apply(this, arguments);
    },

    listeners: {
        beforeRender: function() {
            if (this.extraTbarButtons) {
                this.buildExtraTbarButtons();
            }
        },

        afterRender: function() {
            this.store.load({params:{start:0, limit:25}});
            this.onDisableButtonGroup('export');
            this.batchButton.toggle();
            this.getView().fitColumns();
        }
    },
    buildExtraTbarButtonsData: function() {

        return [
            {
                xtype: 'buttongroup',
                title: Kebab.helper.translate('Extra'),
                defaults: {
                    iconAlign: 'top',
                    scale: 'small',
                    width:50,
                    scope: this
                },
                items: [
                    {
                        text: Kebab.helper.translate('See details'),
                        tooltip: Kebab.helper.translate('See the selected record(s) details'),
                        iconCls: 'icon-application-view-detail',
                        handler: function() { // Records selected
                            var sm = this.getSelectionModel();
                            if (sm.getCount()) {
                                this.fireEvent('roleSelected', sm.getSelections());
                            }
                        }
                    }
                ]
            }
        ];
    },

    buildColumns: function() {

        this.editorTextField = new Ext.form.TextField({});
        this.editorTextArea = new Ext.form.TextArea({});

        return [
            this.selectionModel,
            {
                header : 'ID',
                dataIndex :'id',
                align:'center',
                width:12
            }, {
                header : Kebab.helper.translate('Role title'),
                dataIndex :'title',
                editor:this.editorTextField,
                width:30
            },{
                header : Kebab.helper.translate('Role description'),
                dataIndex :'description',
                editor:this.editorTextArea,
                width:120
            },{
                header   : Kebab.helper.translate('User number'),
                dataIndex: 'num_user',
                align:'center',
                width:30
            },{
                header   : Kebab.helper.translate('Story number'),
                dataIndex: 'num_story',
                align:'center',
                width:30
            },{
                header   : Kebab.helper.translate('Active ?'),
                dataIndex: 'active',
                xtype:'checkcolumn',
                width:20
            }
        ]
    },

    onRemove : function(btn, ev) {

        var sm = this.getSelectionModel();

        if (!sm.getCount()) {
            return false;
        } else {
            sm.each(function(selection) {
                if (selection.data.num_user == 0  & selection.data.num_story == 0) { // just remove the unbound records
                   this.store.remove(selection);
                }
            }, this);
        }
    }

});
