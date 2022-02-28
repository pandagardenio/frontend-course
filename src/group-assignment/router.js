const express = require('express');
const { getCities, getCityLocation } = require('./locationsService');
const { getWeather } = require('./weatherService');

const baseUrl = process.env.MSCBT_BASE_URL;
const paths = {
    root: '/',
    getCities: '/cities',
    getWeather: '/weather/:city'
};

const groupAssignmentRouter = express.Router();

function getFullUrl(path) {
    return `${baseUrl}/group-assignment${path}`;
}

groupAssignmentRouter.get(paths.root, (_req, res) => {
    res.json({
        getCities: getFullUrl(paths.getCities),
        getWeather: getFullUrl(paths.getWeather)
    })
});

groupAssignmentRouter.get(paths.getCities, (_req, res) => {
    res.json(getCities());
});

groupAssignmentRouter.get(paths.getWeather, async (req, res, next) => {
    try {
        const { lat, lng } = getCityLocation(req.params.city.toLowerCase());
        const weather = await getWeather(lat, lng);
        res.json(weather);
    } catch(error) {
        res.status(400).json({
            errorMessage: `${req.params.city} is not available`
        })
    }
});

module.exports = groupAssignmentRouter;
