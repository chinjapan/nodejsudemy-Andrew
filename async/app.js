var weather= require('./weather.js');
var location = require('./location.js');

// setup yargs to have a --location or -l arguments
var argv= require('yargs')
    .option('location',{
        alias:'l',
        demand:false,
        describe:'Location to fetch weather for',
        type: 'string'
    })
    .help('help')
    .argv;

// weather(function(currentWeather){
//     console.log(currentWeather);
// });

// location(function(location){
//     if(!location) {
//         console.log('Unable to guess location');
//         return;
//     }
//     console.log('city: '+ location.city);
//     console.log('log/lat: '+ location.loc);
// })