var request=require('request');
var url ='http:/ipinfo.io';


// module.export to create function
//    make request to url for json
//    if err callbacl()
//    else callnack(body)
module.exports = function(callback) {
    request({
        url:url,
        json:true
    }, function(error,response,body) {
            if(error){
                callback();
            } else {
                callback(body);
            }
    });
};
 