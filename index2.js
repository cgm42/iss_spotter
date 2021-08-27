const {nextISSTimesForMyLocation} = require('./iss_promised');



const print = (passTimes) => {
  for(time of passTimes) {
    const day = new Date(time['risetime'] * 1000).toLocaleString("en-US");
    console.log(`Next pass at ${day} (Pacific Daylight Time) for ${time.duration} seconds!`);
  }
}
nextISSTimesForMyLocation()
  .then(print)
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });