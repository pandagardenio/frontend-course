const { Weather } = require("./Weather");
const { WeatherLocation } = require("./WeatherLocation");
const { WeatherTimeZone } = require("./WeatherTimeZone");

class WeatherResponse {
    static createFromResponse(data) {
        return new WeatherResponse(
            WeatherLocation.createFromResponse(data),
            WeatherTimeZone.createFromResponse(data),
            Weather.createFromResponse(data.current),
            data.hourly.map(Weather.createFromResponse),
            data.daily.map(Weather.createFromResponse)
        )
    }

    constructor(
        weatherLocation,
        weatherTimeZone,
        weatherCurrent,
        weatherHourlyList,
        weatherDailyList
    ){
        this.weatherLocation = weatherLocation;
        this.weatherTimeZone = weatherTimeZone;
        this.weatherCurrent = weatherCurrent;
        this.weatherHourlyList = weatherHourlyList;
        this.weatherDailyList = weatherDailyList;
    }

    toJSON(){
        return {
            location: this.weatherLocation,
            timeZone: this.weatherTimeZone,
            current: this.weatherCurrent,
            hourly: this.weatherHourlyList,
            daily: this.weatherDailyList
        };
    }
}

module.exports = {
    WeatherResponse
}
