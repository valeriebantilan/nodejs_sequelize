const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const httpStatus = require('http-status');
const helmet = require('helmet');
const cors = require('cors');
const {config} = require('./config');
const { ValidationError } = require('express-validation')

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
  var err = new Error('Api Not Found');
  err.status = 404;
  return next(err);
});

app.use(function(err, req, res, next) {
  if (err instanceof ValidationError) {
    // const error = new Error(unifiedErrorMessage);
    // error.status = err.statusCode;
    // return next(err);
    return res.status(err.statusCode).json(err)
  }
  err.status = 500;
  return next(err);
})

// error handler, send stacktrace only during development
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: config.env === 'development' ? err.stack : {}
  })
});

module.exports = app;
