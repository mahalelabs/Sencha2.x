Ext.define('app.controller.StoreOps', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	storeops_container:'storeops_container',
        	storeops_panel:'storeops_container #storeops_panel'
        },
        control: {
        	storeops_panel:{
        		activate:function(){
        			console.log('inside activate')
        		}
        	}
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log("Controller launched");
    }
});
