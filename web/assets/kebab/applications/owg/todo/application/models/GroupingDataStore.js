/**
 * Application GroupingDataStore class
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.todo.application.models
 * @author      Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabOS.applications.todo.application.models.GroupingDataStore = Ext.extend(Kebab.library.ext.RESTfulGroupingDataStore, {

    bootstrap: null,

    restAPI: 'owg/todo',

    readerFields:[
        {name: 'id', type:'integer'},
        {name: 'todo', type:'string'},
        {name: 'status', type:'boolean'},
        {name: 'dueDate', type:'date'}
    ],

    groupField: 'status',

    sortInfo:{field:'id',direction:'DESC'}
});