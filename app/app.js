const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const marketRouter = require('./routes/marketRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api/markets', marketRouter);

module.exports = app;
