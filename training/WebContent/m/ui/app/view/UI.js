Ext.define('app.view.UI', {
	extend : 'Ext.Container',
	alias : 'widget.ui_container',
	requires : [

	],
	config : {
		fullscreen:true,
		cls:'ui_panel',
		items : [ {
			xtype : 'panel',
			itemId : 'ui_panel',
			html:'<div class="hello-text" >Welcome to  Sencha Touch 2  Training  </div>'
			

		} ],

	},


});
