const axios = require('axios');

const getWeather = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=156621152fd496c746572f94ffdfc6b0&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getWeather
}