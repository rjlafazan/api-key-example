const { process_params } = require("express/lib/router");


const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://dog-facts2.p.rapidapi.com/facts",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": process.env.API_KEY,
		"X-RapidAPI-Host": "dog-facts2.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log('HELLO ', response);
});
