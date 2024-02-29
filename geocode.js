const request = require("request")

const geocode = (address, callback) => {
    const geourl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    request({url: geourl, json: true}, (error, response) => {
        if(error){
            callback("ERROR HAS OCCURED!", undefined)
        } else if (response.body.message){
            callback(response.body.message, undefined)
        } else if (response.body.features.length == 0){
            callback("Unkown location", undefined)
        } else {
            callback(undefined, { 
                longitude: response.body.features[0].center[0],
                lattitude: response.body.features[0].center[1]
            })
        }
    })
    }

    module.exports = geocode