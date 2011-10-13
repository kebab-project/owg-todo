/**
 * roleManager Application RoleDataStore class
 *
 * @category    Kebab
 * @package     Applications
 * @namespace   KebabOS.applications.roleManager.application.models
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @author      Onur Özgür ÖZKAN <onur.ozgur.ozkan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabOS.applications.roleManager.application.models.RoleDataStore = Ext.extend(Kebab.library.ext.RESTfulDataStore, {

    bootstrap: null,

    restAPI: 'kebab/role',

    readerFields:[
        {name: 'id', type:'integer'},
        {name: 'title', type:'string'},
        {name: 'description', type:'string'},
        {name: 'num_story', type:'integer'},
        {name: 'num_user', type:'integer'},
        {name: 'active', type:'boolean'}
    ]
});