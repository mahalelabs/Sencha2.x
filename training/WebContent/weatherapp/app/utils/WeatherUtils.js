Ext.define("WeatherApp.utils.WeatherUtils", {
	singleton : true,
	alternateClassName : 'WUtils',

	getWeather : function() {
		return "Weather" + new Date();
	},
	getCallbacks : function(callback) {
		setTimeout(function() {
			callback(new Date());
		}, 0)
	},
	getWeatherData : function(city, days, weatherSuccess) {
		Ext.data.JsonP.request({
			url : 'http://api.worldweatheronline.com/free/v1/weather.ashx',
			callbackKey : 'callback',
			params : {
				key : 'rkhzagnemt7xfrtzapc2s8sq', //579natwfurc74zqrt3qy6utp
				q : city,
				format : 'json',
				num_of_days : days,
			},
			success : function(result) {
				Ext.Viewport.setMasked(false);
				res = result;
				// alert("success")
				// var weatherRes = JSONP.parse(response.responseText);
				var weatherRes = result.data.weather;
				console.log(weatherRes);
				controller.weatherSuccess(weatherRes);
			},
			failure : function() {
				Ext.Viewport.setMasked(false)
				alert("Did not Get Weather Updates From WorldWeather Server")
			}
		});

	}

});