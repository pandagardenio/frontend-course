const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');
const { WeatherResponse } = require('./WeatherResponse');

function getWeatherApiUrl(apiBaseUrl, path, lat, lng, apiKey) {
    const url = new URL(`${apiBaseUrl}${path}`);
    url.search = new URLSearchParams({
        lat,
        lon: lng,
        appId: apiKey,
        exclude: 'minutely'
    }).toString();

    return url;
}

async function getWeather(lat, lng, apiBaseUrl = 'https://api.openweathermap.org/', apiKey = process.env.WEATHER_API_KEY) {
    const url = getWeatherApiUrl(
        apiBaseUrl,
        '/data/2.5/onecall',
        lat,
        lng,
        apiKey
    );
    const response = await fetch(url);
    const data = await response.json();
    return WeatherResponse.createFromResponse(data);
}


module.exports = {
    getWeather
};
