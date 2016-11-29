var request = require('request');
request ({
	url: " http://api.geonames.org/citiesJSON/" // URL to go to
	qs: {north: 44.1, south: -9.9, east: -22.4, west: 55.2, username: ifymorah };
	method: "POST", //method specified
	}
	function (error, response, body) {
		if (error) 
		{
			console.log(error);
		}
		else
		{
			console.log(response, StatusCode, body);
		}
	}

})