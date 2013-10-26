Ext.define('app.view.ListView', {
	extend : 'Ext.List',
	alias : 'widget.listview',
	requires : [],
	config : {
		// use fullscreen:true only when listview takes entire screen and not embeded in other view
		fullscreen:false,
		cls:'my_listview',
		store:'person_store',
        itemTpl: [
                
				'<div class="">{[this.getName(values)]}</div>',
				// Mechanism very helpful to validate the templating data
				{
					getName:function(data){
						return data.name;
					},
				} ,
	]
		
	},


});


