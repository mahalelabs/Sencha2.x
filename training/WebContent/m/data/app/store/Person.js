Ext.define('app.store.Person', {
	extend : 'Ext.data.Store',
	config : {
		storeId : 'person_store',
		model : 'app.model.Person',
		autoLoad : true,
//		data:[
//		      {name:'Adam',domain:'Software',phone:'7411285707',married:false ,gender:'Male',username:'Admin'},
//		      {name:'Rocky',domain:'Sales',phone:'7411285',married:false ,gender:'Male',username:'Admin'},
//		      {name:'Samantha',domain:'HR',phone:'9845298450',married:true ,gender:'Female',username:'User'},
//		      {name:'Claris',domain:'Reception',phone:'8411234560',married:false ,gender:'Female',username:'Casual'},
//		      {name:'Stark',domain:'Film',phone:'7774445563',married:true ,gender:'Male',username:'Film'},
//		      
//		     ],
		     
		proxy: {
			
			     // 1. Ajax 
		       
				 type: 'ajax', //  ajax, rest , memory , localstorage
		         url : 'city.json',
		         reader: {
			           type: 'json',
			           rootProperty: 'city.users',
			         },
			         
			     // 2. Local Storage
		        
//				 type: 'localstorage', //  ajax, rest , memory , localstorage
//		         id:'localusers', // specific to local storage
		         
		         // 3. Session Storage
		       
//		         type: 'sessionstorage', //  ajax, rest , memory , localstorage
//		         id:'localusers', // specific to local storage
		         
		  
		},
		sorters: [{
			property: 'name',
			direction: 'ASC' //DESC
			}]
		       
	
	}
});