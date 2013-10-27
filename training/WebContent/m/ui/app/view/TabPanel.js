Ext.define('app.view.TabPanel', {
	extend : 'Ext.TabPanel',
	alias : 'widget.tabpanel',
	requires : [
	            'app.view.ListView'
	],
	config : {
		cls:'screen',
		 tabBarPosition: 'top', //bottom
		 defaults: {
             styleHtmlContent: true
         },
		 items: [{
             title: 'Home',
             iconCls: 'home',
         	 html:'<div class="hello-text" >HOME SCREEN</div>'
          
         }, {
             title: 'Users',
             iconCls: 'user',
             xtype:'listview',
             mode:'MULTI',
         }]
	}
});