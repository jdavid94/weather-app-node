const axios = require('axios');

const getPlaceLatLng = async(direction) => {
    //console.log(argv.direction);
    const encodeUrl = encodeURI(direction); //Transformamos el parametro a codigo URL
    //console.log(encodeUrl);
    const instance = axios.create({ //Hacemos el llamado a la API que devuelve una PROMESA con AXIOS
        baseURL: `https://geocode.xyz/${encodeUrl}&auth=919722988617294849991x37120?json=1`,
    });
    const resp = await instance.get();
    if (resp === null) {
        throw new Error('Results Not Found');
    }
    const data = resp.data;
    const direc = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;
    return {
        direc,
        lat,
        lng
    }
}

module.exports = {
    getPlaceLatLng
}