// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

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