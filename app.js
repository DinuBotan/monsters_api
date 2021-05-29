const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');


const app = express();

app.use(express.json());
app.use('/', router);

app.use((err, req, res, next) => {
    res.json(err);
});

module.exports = app;