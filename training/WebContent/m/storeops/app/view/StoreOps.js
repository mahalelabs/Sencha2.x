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
			},{
				xtype:'spacer',
			},{
				xtype : 'button',
				iconCls : 'delete',
				handler:function(){
					var store=Ext.getStore("person_store");
					store.removeAll();
				}
			} ]//tool bar items 
		}, {
			xtype : 'listview',
			listeners:{
				itemtaphold:function( self, index, target, record, e, eOpts ){
					var store=Ext.getStore("person_store");
					 Ext.Msg.confirm('Delete', 'Do you want to delete '+record.get('name'), 
							    function(btn) {
							        if (btn === 'yes') {
							          
							        	store.removeAt(index);

							            
							        } else {
							            return false;
							        }
							    });
				}
			}
		}, {
			xtype:'searchfield',
			placeHolder:'Enter name to Filter',
			itemId:'filter_txt',
			style:'border-style:solid; border-width:1px;margin:2%;',
		
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
		},{
			xtype:'panel',
			layout:'hbox',
			items:[{
				xtype:'textfield',
				placeHolder:'Enter Name',
				style:'border-style:solid; border-width:1px;margin:2%;',
				itemId:'name_txt',
				width:'150px'
			},{
				xtype:'textfield',
				style:'border-style:solid; border-width:1px;margin:2%;',
				placeHolder:'Enter Domain',
				itemId:'domain_txt',
				width:'150px'
			},
			{
				xtype:'textfield',
				style:'border-style:solid; border-width:1px;margin:2%;',
				placeHolder:'insert at ',
				itemId:'insert_txt',
				width:'100px'
			},
			]
		},
		{
			xtype:'button',
			text:'Add',
			ui:'confirm',
			itemId:'name_domain',
			style:'margin:1%',
			handler:function(){
				var name1=Ext.ComponentQuery.query("#name_txt")[0].getValue();
				var domain1=Ext.ComponentQuery.query("#domain_txt")[0].getValue();
				var index=Ext.ComponentQuery.query("#insert_txt")[0].getValue();
				console.log(index);
				var person={
						name:name1,
						domain:domain1,
						phone:'7411285707',
						married:false ,
						gender:'Male',
						username:'user'
				};
				
				var store=Ext.getStore("person_store");
				if(index != undefined ){
					alert()
					store.insert(3,person);
					store.sync();
				} else {
					store.add(person);
				}
				
				
			}
		}// button
	

		],// panel items

	},

});
