import CustomerController from './customer.controller'
const { validate } = require('express-validation')
const paramValidation = require('./customer.validation');

/**
 * Module dependencies
 */
module.exports = function(app) {
  // User Routes
  app.route('/api/customer/:customerId')
    .get(CustomerController.getCustomer);

  app.route('/api/customer').post(validate(paramValidation.create), CustomerController.createCustomer);
};

