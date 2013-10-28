Ext.define('app.view.NestedList', {
	extend : 'Ext.NestedList',
	alias : 'widget.nestedlist',
	requires : ['Ext.TitleBar'],
	config : {
		// use fullscreen:true only when listview takes entire screen and not embeded in other view
		fullscreen:false,
		displayField: 'text',
		cls:'my_listview screen',
		store:'beverages_store',
		title: 'Groceries',
		listeners: {
             leafitemtap: function (nestedList, list, index, target, record) {
//                 var detailCard = nestedList.getDetailCard();
//                 detailCard.setHtml('You selected: ' + record.get('text'));
            	 Ext.Msg.alert(record.get('text'))
             }
         }

	},


});


