Ext.define('app.view.FormPanel', {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.formpanel',
	requires : [
	            
	],
	config : {
		
		cls : 'my_formpanel',
		items : [{
			xtype : 'label',
			html:'Form Panel Sample'
		}, {
			xtype : 'textfield',
			name : 'name',
			label : 'Name'
		}, {
			xtype : 'emailfield',
			name : 'email',
			label : 'Email'
		}, {
			xtype : 'passwordfield',
			name : 'password',
			label : 'Password'
		},
		
		// SELECT FIELD
	      {
            xtype: 'selectfield',
            name : 'role',
            label: 'Role',
            options: [
                {
                    text : 'Developer',
                    value: 'Developer'
                },
                {
                    text : 'Designer',
                    value: 'Designer'
                },
                {
                    text : 'ProgramManager',
                    value: 'ProgramManager'
                }
            ]
        },
		// DATE PICKER
        {
            xtype: 'datepickerfield',
            destroyPickerOnHide: true,
            name : 'date',
            label: 'DOB',
            value: new Date(),
            picker: {
                yearFrom: 1980,
            }
        },
		{
            xtype: 'fieldset',
            id: 'fieldset2',
            title: 'Mobility Platform',
            defaults: {
                xtype     : 'radiofield',
                labelWidth: '35%'
            },
            items: [
                {
                    name : 'platform',
                    value: 'iOS',
                    label: 'iOS'
                },
                {
                    name : 'platform',
                    label: 'Android',
                    value: 'Android'
                },
                {
                    name : 'platform',
                    label: 'Blackberry',
                    value: 'Blackberry'
                },
                {
                    name : 'platform',
                    label: 'Windows',
                    value: 'windows'
                }
            ]
        },{
            xtype: 'toolbar',
            layout: {
                pack: 'center'
            }, // layout
            ui: 'plain',
            items: [{
                xtype: 'button',
                text: 'Reset',
                ui: 'decline',
                handler: function (btn, evt) {
                	var button=btn;
                    Ext.Msg.confirm('', 'Are you sure you want to reset this form?', function (btn) {
                        if (btn === 'yes') {
                        	button.up('formpanel').setValues({
                            	name: '',
                            	email: '',
                            	password:'',
                            	platform:" ",
                            	role:null
                            	
                            }); // contactForm()
                        } // switch
                    }); // confirm()
                }
            }, {
                xtype: 'button',
                text: 'Submit',
                ui: 'confirm',
                handler: function (btn, evt) {
                    var values = btn.up('formpanel').getValues();
                    Ext.Msg.alert('Welcome', Ext.String.format('{0} is  {1} {2} contact email : {3} ', values.name, values.platform,values.role,values.email));
                } // handler
            }] // items (toolbar)
        } ]

	},

});
