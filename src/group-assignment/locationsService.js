const locations = require('./locations.json');

function getCities() {
    return Object.keys(locations);
}

function getCityLocation(city) {
    return locations[city];
}

module.exports = {
    getCities,
    getCityLocation
}
