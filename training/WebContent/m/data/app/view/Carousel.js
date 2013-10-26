Ext.define('app.view.Carousel', {
	extend : 'Ext.Carousel',
	alias : 'widget.mycorousel',
	requires : ['app.view.ListView'],
	config : {
		fullscreen : true,
		cls : 'my_carousel',
		direction : 'vertical',
		//html:'Carousel Sample',
		defaults : {
			styleHtmlContent : true
		},
		items : [ {
			html:'<div class="hello-text" >Now lets learn about data</div>',
			style : 'background-color:rgb(231, 97, 107)'
		}, {
			html:'<div class="hello-text" >Ajax , JSON, JSONP, Proxy ...</div>',
			style : 'background-color: rgb(158, 127, 48)'
		} ,{
			xtype:'listview'
		}]
	},

});
