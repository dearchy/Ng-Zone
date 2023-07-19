// import zone.js
const zone = require('zone.js');

// create a judgement zone for the current context by fork
const judgementZone = zone.fork({
  name: 'judgementZone',
  onHandleError: (parentZoneDelegate, currentZone, targetZone, error) => {
    // handle error
  }
});


// create two team group zone for the current context by fork judgement zone
const team1Zone = judgementZone.fork({
  name: 'team1Zone',
  onHandleError: (parentZoneDelegate, currentZone, targetZone, error) => {
    // handle error
  }
});

const team2Zone = judgementZone.fork({
  name: 'team2Zone',
  onHandleError: (parentZoneDelegate, currentZone, targetZone, error) => {
    // handle error
  }
});


