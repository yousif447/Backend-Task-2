const geocode = require("./geocode")
const forecast = require("./forecast")

geocode(process.argv[2],  (error, data) => {
    console.log("GECODE")
    console.log("ERROR: ", error)
    console.log("DATA: ", data)

    forecast(data.lattitude, data.longitude, (error, data) => {
        console.log("FORECAST")
        console.log("ERROR: ", error)
        console.log("DATA: ", data)
    })

})