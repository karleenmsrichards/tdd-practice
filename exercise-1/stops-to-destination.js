const stations = require('./northern-line.json')

// This function should calculate the number of stops to the destination
function calculateStopsToDestination(start, end) {
    if (start === undefined || end === undefined || !stations.includes(start) || !stations.includes(end)) {
      throw new Error('Both start and end parameters are required');
    }
    return Math.abs(stations.indexOf(end) - stations.indexOf(start));
  }

module.exports = calculateStopsToDestination
