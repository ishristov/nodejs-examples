const request = require('request')

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/1ba788b0f660699885450cbc6dba44e5/${lat},${lng}?exclude=hourly,daily&units=auto`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    } else {
      callback('Unable to fetch weather from the darksky.net server.')
    }
  })
}

// https://api.darksky.net/forecast/1ba788b0f660699885450cbc6dba44e5/42.6977082,23.3218675?exclude=hourly,daily&units=auto

module.exports.getWeather = getWeather