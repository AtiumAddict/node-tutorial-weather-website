const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=a0acf1a12477d0c97e4e41b95fa2cafb&query=' +
    latitude +
    ',' +
    longitude;

  request({ url, json: true }, (err, { body } = {}) => {
    if (err) {
      callback('Unable to connect to weather service!');
    } else if (body.error) {
      callback('Unable to find location!');
    } else {
      const message =
        body.current.weather_descriptions[0] +
        '. It is currently ' +
        body.current.temperature +
        ' degrees outside. It feels like ' +
        body.current.feelslike +
        ' degrees. The humidity is ' +
        body.current.humidity +
        '%. The wind speed is ' +
        body.current.wind_speed +
        '.';
      callback(undefined, message);
    }
  });
};

module.exports = forecast;
