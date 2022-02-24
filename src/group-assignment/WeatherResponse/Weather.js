class Weather {
    static createFromResponse(data) {
        return new Weather(
            data.dt * 1000,
            data.temp,
            data.feels_like,
            data.pressure,
            data.humidity,
            data.uvi,
            data.clouds,
            data.wind_speed,
            data.weather[0]
        );
    }

    constructor(
        time,
        temperature,
        temperatureFeeling,
        pressure,
        humidity,
        uvi,
        cloudiness,
        windSpeed,
        summary
    ) {
        this.time = time;
        this.temperature = temperature;
        this.temperatureFeeling = temperatureFeeling;
        this.pressure = pressure;
        this.humidity = humidity;
        this.uvi = uvi;
        this.cloudiness = cloudiness;
        this.windSpeed = windSpeed;
        this.summary = summary;
    }

    toJSON() {
        return {
            time: this.time,
            temperature: this.temperature,
            temperatureFeeling: this.temperatureFeeling,
            pressure: this.pressure,
            humidity: this.humidity,
            uvi: this.uvi,
            cloudiness: this.cloudiness,
            windSpeed: this.windSpeed,
            summary: this.summary
        }
    }
}

module.exports = {
    Weather
}
