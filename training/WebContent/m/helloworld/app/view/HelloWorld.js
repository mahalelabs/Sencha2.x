Ext.define('app.view.HelloWorld', {
	extend : 'Ext.Container',
	alias : 'widget.hellworld_container',
	requires : [

	],
	config : {
		fullscreen:true,
		cls:'hellworld_panel',
		items : [ {
			xtype : 'panel',
			itemId : 'hellworld_panel',
			html:'<div class="hello-text" >Welcome to  Sencha Touch 2  Training  </div>'
			

		} ],

	},


});
