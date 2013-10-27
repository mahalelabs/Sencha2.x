Ext.define('app.view.DataView', {
	extend: 'Ext.dataview.DataView',
	xtype: 'dataviewdemo',
	config: {
	xtype: 'dataview',
	title: 'DataView Demo',
	cls:'screen',
	layout:'fit',
	store:'person_store',
	scrollable: 'horizontal', //vertical
	inline: {
		wrap:true,  //false   
	},
	itemTpl: '<div class="dataview_itemtpl1"> '+
			'<div class="dataview_img"> <img src="resources/images/user.png" /></div>'+
	        '<div class="dataview_name"> {name}</div>'+
	        '</div>',
	listeners: {
	    		itemtap:function( self, index, target, record, e, eOpts ){
	    			///console.log(record);
	    			Ext.Msg.alert("Hello",record.data.name);
	    		}
	    	},//listeners

	},

	

});

