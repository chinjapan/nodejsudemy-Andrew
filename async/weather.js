
var request=require('request');
var url ="http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";
module.exports = function(callback){
     request({
        url: url,
        json:true
    },function(error,response,body){
        if(error){
            callback('Unable to fetch weather');
        } else {
            //console.log(JSON.stringify(body,null,4));
            // It's 77.77 in London
             callback('It¥ ' + body.main.temp + ' in ' + body.name +'!')
        }
    });
}