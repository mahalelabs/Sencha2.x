Ext.define("app.view.DataUtil", {
	singleton : true,
	alternateClassName : 'DataUtil',
	
	getWeatherData:function(){
		Ext.data.JsonP.request({
			url : 'http://api.worldweatheronline.com/free/v1/weather.ashx',
			callbackKey : 'callback',
			params : {
				key : '579natwfurc74zqrt3qy6utp',
				q : "Cochin",
				format : 'json',
				num_of_days : 5,
			},
			success : function(result) {
				
				//var data=result.data.weather[0].tempMaxC;
				Ext.Msg.alert("Temperature",result.data.weather[0].tempMaxC)
				
				
			},
			failure : function() {
				
				alert("Did not Get Weather Updates From WorldWeather Server")
			}
		});
	}
	
});