/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');


const fetchMyIP = function(cb) {
  // use request to fetch IP address from JSON API
  request('https://api64.ipify.org/?format=json', (err, res, body) => {
    if (err) {
      cb(err, null);
      return;
    }
    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${body}`;
      cb(Error(msg), null);
      return;
    }
    return cb(null, JSON.parse(body).ip);
  });
};
 
const fetchCoordsByIP = function(ip, cb) {
  //returns lat and long
  request(`https://freegeoip.app/json/${ip}`, (err, res, body) => {
    if (err) {
      cb(err, null);
      return;
    }
    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching coordinates: ${body}`;
      cb(Error(msg), null);
      return;
    }
    const result = {
      latitude: JSON.parse(body).latitude,
      longitude: JSON.parse(body).longitude
    };
    cb(null, result);
  });
};

const fetchISSFlyOverTimes = function(coords, cb) {
  const lat = coords.latitude;
  const long = coords.longitude;
  request(`http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`,  (err, res, body) => {
    if (err) {
      cb(err, null);
      return;
    }
    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching ISS: ${body}`;
      cb(Error(msg), null);
      return;
    }
    cb(null, JSON.parse(body).response)
  })
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
