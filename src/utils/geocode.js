const request = require('postman-request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoiYXRpdW1hZGRpY3QiLCJhIjoiY2wwNDhtMWtmMDhldjNqbnQwMXgyNnI1cCJ9.MEneXHXNIkr11mxpU7G3SQ&limit=1';

  request({ url, json: true }, (err, { body } = {}) => {
    if (err) {
      callback('Unable to connect to geocode services!');
    } else if (body.features.length === 0) {
      callback('Unable to find a matching geolocation! Try another search.');
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
