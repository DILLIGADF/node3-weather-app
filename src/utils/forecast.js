const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7d963504ed1eadcf81651b9a48fa8f64&query='+ latitude +','+ longitude +'&units=m'
    request({url, json: true}, (error, {body}={}) => {
        if (error){
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error){
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out, feels like ' + body.current.feelslike + ' degrees. \n The humidty is: ' + body.current.humidity + '% and the precipitaion is: ' + body.current.precip + '%.')
        }
    })
}

module.exports = forecast