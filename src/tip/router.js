const express = require('express');
const barChartData = require('./data/BarChart.json');
const calendarChartData = require('./data/CalendarChart.json');
const pieChartData = require('./data/PieChart.json');
const radarChartData = require('./data/RadarChart.json');
const radialBarCharData = require('./data/RadialBarChart.json');

const tipRouter = express.Router();

tipRouter.get('/data/bar-chart', (_req, res) => {
    res.json(barChartData);
});

tipRouter.get('/data/calendar-chart', (_req, res) => {
    res.json(calendarChartData);
});

tipRouter.get('/data/pie-chart', (_req, res) => {
    res.json(pieChartData);
});

tipRouter.get('/data/radar-chart', (_req, res) => {
    res.json(radarChartData);
});

tipRouter.get('/data/radial-bar-chart', (_req, res) => {
    res.json(radialBarCharData);
});

tipRouter.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (
        (username === 'luis.grande' && password === '1234') ||
        (username === 'marcelo.hardy' && password === '123456')
    ) {
        res.json({
            username
        });
    } else {
        res.status(401).json({
            error: 'User login failed'
        })
    }
});

module.exports = tipRouter;
