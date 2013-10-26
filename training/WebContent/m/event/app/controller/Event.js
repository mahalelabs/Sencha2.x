Ext.define('app.controller.Event', {
    extend: 'Ext.app.Controller',
    requires:['app.view.Event'],
    config: {
        refs: {
        	event_panel:'event_panel',
        	
        	
        },
        control: {
        	event_panel:{
        		// Custom Event fired by the view 
        		hello_event:function(e){
        			console.log(e);
        		},
        		
        		activate :function(self	, newActiveItem, oldActiveItem, eOpts){
        			console.log('event_panel activate')
        		},
        		initialize :function(self,eOpts){
        			console.log('event_panel initialize')
        		},
        		hide :function(){
        			console.log('event_panel hide')
        		},
        		show :function(){
        			console.log('event_panel show')
        		},
        		deactivate :function(){
        			console.log('event_panel deactivate')
        		},
        		fullscreen :function(){
        			console.log('event_panel fullscreen')
        		},
        	
        	}
        }
    },
    
   
});
