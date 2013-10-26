Ext.define('app.controller.HelloWorld', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	hellworld_container:'hellworld_container',
        	hellworld_panel:'hellworld_container #hellworld_panel'
        },
        control: {
        	hellworld_panel:{
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
