Ext.define('app.store.Person', {
	extend : 'Ext.data.Store',
	config : {
		storeId : 'person_store',
		model : 'app.model.Person',
		autoLoad : true,
		data:[
		      {name:'Adam',domain:'Software',phone:'7411285707',married:false ,gender:'Male',username:'Admin'},
		      {name:'Ana',domain:'Software',phone:'7411285707',married:false ,gender:'Female',username:'Admin'},
		      {name:'Rocky',domain:'Sales',phone:'7411285',married:false ,gender:'Male',username:'Admin'},
		      {name:'Samantha',domain:'HR',phone:'9845298450',married:true ,gender:'Female',username:'HR'},
		      {name:'Claris',domain:'Reception',phone:'8411234560',married:false ,gender:'Female',username:'Staffing'},
		      {name:'Stark',domain:'Film',phone:'7774445563',married:true ,gender:'Male',username:'Film'},
		      {name:'Samantha',domain:'HR',phone:'9845298450',married:true ,gender:'Female',username:'HR'},
		      {name:'Claris',domain:'Reception',phone:'8411234560',married:false ,gender:'Female',username:'Staffing'},
		      {name:'Stark',domain:'Film',phone:'7774445563',married:true ,gender:'Male',username:'Film'},
		      
		     ],
		grouper: {
                  groupFn: function(record) {
                          return record.get('username');
                  }
          }
		     

		       
	
	}
});