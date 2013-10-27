Ext.define('app.model.Person', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ {
			name : 'name',
			type : 'string'
		}, {
			name : 'domain',
			type : 'string'
		}, {
			name : 'phone',
			type : 'string'
		}, {
			name : 'gender',
			type : 'string'

		}, {
			name : 'username',
			type : 'string'
		}, {
			name : 'married',
			type : 'boolean',
			defaultValue : false
		} ],

		  validations: [
		                {type: 'presence',  field: 'name'},
		                {type: 'length',    field: 'name',     max: 10},
		                {type: 'inclusion', field: 'gender',   list: ['Male', 'Female']},
		                {type: 'exclusion', field: 'username', list: ['Admin', 'User']},
		                {type: 'format',    field: 'username', matcher: /([a-z]+)[0-9]{2,3}/}
		            ]
	},
	changeName : function(newname) {
		var oldName = this.get('name'), 
		newName = newname;
		this.set('name', newName);
	}
});
