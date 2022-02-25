const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');
const { WeatherResponse } = require('./WeatherResponse');
const NodeCache = require( "node-cache" );

const weatherCache = new NodeCache();

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
    const weatherResponseFromCache = getFromCache(lat, lng);

    if (weatherResponseFromCache) {
        return WeatherResponse.deserialize(weatherResponseFromCache);
    }

    const url = getWeatherApiUrl(
        apiBaseUrl,
        '/data/2.5/onecall',
        lat,
        lng,
        apiKey
    );
    const response = await fetch(url);
    const data = await response.json();
    const weatherResponse = WeatherResponse.createFromResponse(data);
    setInCache(lat, lng, weatherResponse);
    return weatherResponse;
}

function getCacheKey(lat, lng) {
    return `${lat}-${lng}`;
}

function getFromCache(lat, lng) {
    return weatherCache.get(getCacheKey(lat, lng));
}

function setInCache(lat, lng, weatherResponse) {
    weatherCache.set(getCacheKey(lat, lng), weatherResponse.toJSON(), 120)
}

module.exports = {
    getWeather
};
