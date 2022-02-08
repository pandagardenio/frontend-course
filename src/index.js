const express = require('express');
const cors = require('cors');
const sesssion5Router = require('./session5/router');

const app = express();
const port = process.env.PORT || 3100;

app.use(cors())

app.use(express.json());
app.use('/session5', sesssion5Router);

app.get('/', (_req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
