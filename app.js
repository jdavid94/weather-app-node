const place = require('./Place/place.js');
const weather = require('./weather/weather.js');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'City Name',
        demand: true
    }
}).argv;


//argv.direction
//place.getPlaceLatLng(argv.direction)
//  .then(console.log);

//weather.getWeather(40.42955, -3.64539)
//  .then(console.log)
//.catch(console.log);

const getInfo = async(direction) => {
    try {
        const data = await place.getPlaceLatLng(direction);
        const temp = await weather.getWeather(data.lat, data.lng);
        return `The Weather of ${ data.direc } is ${ temp } °Celsius`;
    } catch (error) {
        return 'Place and Weather not Found';
    }
}

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log);