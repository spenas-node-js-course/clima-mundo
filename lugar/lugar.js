const axios = require('axios');


const getLugarLatLng = async( direccion ) => {


    
    const encoderURL = encodeURI( direccion );
    
    
    const instance = axios.create({
    
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderURL}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '7cabef419bmsh158166a0d3fc88ap13dc65jsn01057574a3cc'
        }
    })
    
    const resp = await instance.get();

    if( resp.data.Results.length === 0) {
        throw new Error(`no hay resultados para ${direccion}`)
    }

    const data = resp.data.Results[0];
    const direc = data.name;
    const lat = data.lat;
    const lng = data.lon;

    

        return {
            direc,
             lat,
              lng
        }
}

module.exports = {
    getLugarLatLng
}

