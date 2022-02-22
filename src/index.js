const express = require('express');
const cors = require('cors');
const sesssion5Router = require('./session5/router');
const session7Router = require('./session7/router');
const groupAssignmentRouter = require('./group-assignment/router');

const app = express();
const port = process.env.PORT || 3100;

app.use(cors())

app.use(express.json());
app.use('/session5', sesssion5Router);
app.use('/session7', session7Router);
app.use('/group-assignment', groupAssignmentRouter);

app.get('/', (_req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
