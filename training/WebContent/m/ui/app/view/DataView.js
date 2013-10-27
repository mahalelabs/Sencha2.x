Ext.define('app.view.DataView', {
	extend: 'Ext.dataview.DataView',
	xtype: 'dataviewdemo',
	config: {
	xtype: 'dataview',
	title: 'DataView Demo',
	layout:'fit',
	store:'person_store',
	scrollable: 'horizontal',
	inline:{
		wrap:true,
	},
	itemTpl: '<div class="dataview_itemtpl1"> '+
			'<div class="dataview_img"> <img src="resources/images/user.png" /></div>'+
	        '<div class="dataview_name"> {name}</div>'+
	        '</div>'

	},
	

});

