const express = require('express');
const { getUsers, getUser, createUser, clearUsers } = require('./service');

const session5Router = express.Router();

session5Router.get('/users', (_req, res) => {
    res.json(getUsers())
});

session5Router.get('/users/:userId', (req, res) => {
    const user = getUser(req.params.userId);
    if (!user) {
        res.status(404).json({ errorMessage: 'User Not Found' });
    } else {
        res.json(user);
    }
});

session5Router.post('/users', (req, res) => {
    try {
        const user = createUser(req.body);
        res.json(user);
    } catch(_error) {
        res.status(400).json({ errorMessage: 'User Already Exists' });
    }
});

session5Router.post('/users/clear', (_req, res) => {
    res.json(clearUsers());
});

module.exports = session5Router;
