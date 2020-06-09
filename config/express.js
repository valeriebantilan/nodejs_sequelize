const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const httpStatus = require('http-status');
const helmet = require('helmet');
const cors = require('cors');
const {config} = require('./config');

const app = express();

if (config.env === 'development') {
  app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use(cors());


app.get('/api/health-check', (req, res) =>
  res.send('OK')
);


// mount all routes
config.files.routes.forEach(routePath => {
  console.log(routePath);
  require(path.resolve(routePath))(app);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  return next(new Error('Api Npt Found'));
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: config.env === 'development' ? err.stack : {}
  })
});

module.exports = app;
