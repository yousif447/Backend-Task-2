const request = require("request")

const forecast = (longitude, lattitude, callback) => {
const url = "http://api.weatherapi.com/v1/current.json?key=82e8988ff2c240ffbf3153645242602&q=" + longitude + ", " + lattitude
request({url, json: true}, (error, response) => {
    if(error){ // low level error "error in website name"
        callback("ERROR HAS OCCURED!", undefined)
    } else if (response.body.error){ // error in api key || location name
        callback(response.body.error.message, undefined)
    } else { // No error
        callback(undefined, (response.body.location.name + " is " + response.body.current.condition.text + "and temperature is " + response.body.current.temp_c + "C"))
    }
})
}

module.exports = forecast