Ext.define('app.controller.UI', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	ui_container:'ui_container',
        	ui_panel:'ui_container #ui_panel'
        },
        control: {
        	ui_panel:{
        		activate:function(){
        			console.log('inside activate')
        		}
        	}
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log("Controller launched")
    }
});
