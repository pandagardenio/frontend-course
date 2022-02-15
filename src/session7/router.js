const express = require('express');
const contacts = require('./contacts.json');

const session7Router = express.Router();

session7Router.get('/contacts', (_req, res) => {
    res.json(contacts);
});

session7Router.get('/contacts/:contactId', (req, res) => {
    const contactId = req.params.contactId;
    const contact = contacts.find(contact => contact.userName === contactId);

    if (!contact) {
        res.status(404).json({ errorMessage: 'Contact Not Found' });
    } else {
        res.json(contact);
    }
});

module.exports = session7Router;
