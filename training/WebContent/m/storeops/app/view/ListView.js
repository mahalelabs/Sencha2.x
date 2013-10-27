Ext.define('app.view.ListView', {
	extend : 'Ext.List',
	alias : 'widget.listview',
	requires : [],
	config : {
		// use fullscreen:true only when listview takes entire screen and not embeded in other view
		fullscreen:false,
		cls:'my_listview screen',
		store:'person_store',
		indexBar:true,
		//mode:'MULTI',  // multiple selction 
		grouped:false,
	    ui: 'normal',  //normal , round
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


