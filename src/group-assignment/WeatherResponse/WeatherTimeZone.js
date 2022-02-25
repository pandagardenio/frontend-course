class WeatherTimeZone {
    static deserialize(data) {
        return new WeatherTimeZone(data.name, data.offset);
    }

    static createFromResponse(data) {
        return new WeatherTimeZone(data.timezone, data.timezone_offset);
    }

    constructor(name, offset) {
        this.name = name;
        this.offset = offset;
    }

    toJSON() {
        return {
            name: this.name,
            offset: this.offset
        }
    }
}

module.exports = {
    WeatherTimeZone
}
