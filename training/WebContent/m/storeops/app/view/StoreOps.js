Ext.define('app.view.StoreOps', {
	extend : 'Ext.Panel',
	alias : 'widget.storeops_container',
	requires : [ 'app.view.ListView', ],
	config : {
		fullscreen : true,
		cls : 'storeops_panel',
		items : [ {
			xtype : 'toolbar',
			title:'Store Operations',
			items : [ {
				xtype : 'button',
				iconCls : 'refresh',
				handler:function(){
					var store=Ext.getStore("person_store");
					store.clearFilter();
				}
			} ]//tool bar items 
		}, {
			xtype : 'listview',
		}, {
			xtype:'searchfield',
			placeHolder:'Enter name to Filter',
			itemId:'filter_txt',
			style:'border-style:solid; border-width:1px;margin:2%;',
			width:'350px'
		},
		{
			xtype:'panel',
			layout:'hbox',
			items:[	{
				xtype:'button',
				text:'Name Filter',
				style:'margin:1%',
				ui:'action',
				handler:function(){
					var store=Ext.getStore("person_store");
					var text=Ext.ComponentQuery.query("#filter_txt")[0].getValue();
					store.filter("name",text);
				}
			},	{
				xtype:'button',
				text:'All Filter',
				style:'margin:1%',
				ui:'action',
				handler:function(){
					var store=Ext.getStore("person_store");
					var text=Ext.ComponentQuery.query("#filter_txt")[0].getValue();
					
					store.filter(function(item){
					 	
						if( (item.get('name') == text ) || (item.get('username') == text ) || 
							(item.get('domain') == text )  || (item.get('phone') == text ) || 
							(item.get('gender') == text ) )
							return true;
							return false;
						
						
					 	},this);
						
				}
			}]
		}
	

		],// panel items

	},

});
