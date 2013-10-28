Ext.define('app.view.Carousel', {
	extend : 'Ext.Carousel',
	alias : 'widget.mycorousel',
	requires : ['app.view.ListView','app.view.DataView','app.view.TabPanel','app.view.NestedList'],
	config : {
		fullscreen : true,
		cls : 'my_carousel',
		direction : 'vertical',  // horizontal
		// html:'Carousel Sample',
		defaults : {
			styleHtmlContent : true
		},
		items : [ {
			html:'<div class="hello-text" >Wanna Fill a form ?</div>',
			style : 'background-color: #759E60'
		}, {
			html:'<div class="hello-text" >Lets do it ? </div>',
			style : 'background-color: #5E99CC'
		} ,{
			xtype:'panel',
			items:[{
				xtype:'toolbar',
				cls:'tool',
				title:'FormPanel Demo'
			},{
				xtype:'formpanel'
			}]
		},{
			xtype:'panel',
			items:[{
				xtype:'toolbar',
				cls:'tool',
				title:'ListView Demo'
			},{
				xtype:'listview'
			}]
		},{
			xtype:'panel',
			items:[{
				xtype:'toolbar',
				cls:'tool',
				title:'DataView Demo'
			},{
			xtype:'dataviewdemo',
			style : 'background-color: #5E99CC',
			
		}]
		},{
			xtype:'panel',
			items:[{
				xtype:'toolbar',
				cls:'tool',
				title:'TabPanel Demo'
			},{
				xtype:'tabpanel'
			}]
		},{
			xtype:'panel',
			items:[
//			       {
//				xtype:'toolbar',
//				cls:'tool',
//				title:'NestList Demo'
//			},
			{
				xtype:'nestedlist'
			}]
		}]
	},
	
});
