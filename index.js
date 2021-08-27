// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

const nextISSTimesForMyLocation = function(cb) {
 fetchMyIP((error, ip) => {
   if (error) {
    return cb(error, null);
   }
   fetchCoordsByIP(ip, (err, data) => {
    if (err) {
      return cb(error, null);
    }
    fetchISSFlyOverTimes(data, (err, data) => {
      if (err) {
        return cb(error, null);
      }
      return cb(null, data);
    });
  })
 })
}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for(time of passTimes) {
    const day = new Date(time['risetime'] * 1000).toLocaleString("en-US");
    console.log(`Next pass at ${day} (Pacific Daylight Time) for ${time.duration} seconds!`);
  }
});






// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("sdf", (err, data) => {
//   if (err) {
//     console.log('It did not work...', err);
//     return;
//   }
//   console.log(data);
// })

// fetchISSFlyOverTimes({ latitude: 49.2286, longitude: -122.9317 }, (err, data) => {
//   if (err) {
//     console.log('didnt work', err);
//     return;
//   }
//   console.log(data);
// });
