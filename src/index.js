const express = require('express');
const cors = require('cors');
const sesssion5Router = require('./session5/router');
const session7Router = require('./session7/router');
const groupAssignmentRouter = require('./group-assignment/router');
const tipRouter = require('./tip/router');

const app = express();
const port = process.env.PORT || 3100;

app.use(cors())

app.use(express.json());
app.use('/session5', sesssion5Router);
app.use('/session7', session7Router);
app.use('/group-assignment', groupAssignmentRouter);
app.use('/tip', tipRouter);

app.get('/', (_req, res) => {
    res.send('Hello World!');
});

app.get('/pictures', (_req, res) => {
    res.json([{
        "title": "Photo Title 1",
        "description": "Photo Description 1",
        "url": "https://img.freepik.com/free-photo/old-wooden-door-with-bougainvillea_1401-306.jpg?t=st=1646736058~exp=1646736658~hmac=977cc22391afa3aa2d9e70d65ee61c82fcdcd3436d97aa3e26f0e0d552fbb6b3&w=2000"
    },
    {
        "title": "Photo Title 2",
        "description": "Photo Description 2",
        "url": "https://img.freepik.com/free-photo/miniature-businessman-map-europe_1401-341.jpg?w=2000"
    },
    {
        "title": "Photo Title 3",
        "description": "Photo Description 3",
        "url": "https://img.freepik.com/free-photo/filament-bulb-lying-euro-coins_1401-453.jpg?w=2000"
    },
    {
        "title": "Photo Title 4",
        "description": "Photo Description 4",
        "url": "https://img.freepik.com/free-photo/blue-morning-natural-mountains-bamboo_1417-32.jpg?w=2000"
    },
    {
        "title": "Photo Title 5",
        "description": "Photo Description 5",
        "url": "https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg?w=2000"
    },
    {
        "title": "Photo Title 6",
        "description": "Photo Description 6",
        "url": "https://img.freepik.com/free-photo/milky-way_1401-347.jpg?w=2000"
    },
    {
        "title": "Photo Title 7",
        "description": "Photo Description 7",
        "url": "https://img.freepik.com/free-photo/seeds-with-lit-bulb_1232-553.jpg?w=2000"
    },
    {
        "title": "Photo Title 8",
        "description": "Photo Description 8",
        "url": "https://img.freepik.com/free-photo/girl-frees-butterfly-from-moment-concept-freedom_34998-377.jpg?w=2000"
    }
    ]
    );
})

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
