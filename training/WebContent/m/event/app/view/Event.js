Ext.define('app.view.Event', {
	extend : 'Ext.Panel',
	xtype : 'event_panel',
	requires : [

	],
	constructor : function() {
		this.callParent(arguments);
		console.log('Inside Event view constructor... ');
	},
	config : {
		listeners : {

			element : 'element',
			scope : this,
			tap : function() {
				console.log('element tap!');
			},

		// This if for button to delagte
		// delegate : 'button',
		// scope:this,
		// tap : function(e) {
		// e.up().fireEvent("hello_event",e.getId());
		// //console.log(e.getId());
		// }
		},// listeneres
		items : [ {
			xtype : 'button',
			text : 'Delegate Click',
			style : 'margin:30%'
		} ]
	}
});
