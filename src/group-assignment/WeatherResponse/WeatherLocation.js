class WeatherLocation {
    static createFromResponse(data) {
        return new WeatherLocation(data.lat, data.lon);
    }

    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }

    toJSON() {
        return {
            lat: this.lat,
            lng: this.lng
        }
    }
}

module.exports = {
    WeatherLocation
}
