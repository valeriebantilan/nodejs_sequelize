import CustomerController from './customer.controller'
const { validate } = require('express-validation')
const paramValidation = require('./customer.validation');

module.exports = function(app) {
  // Customer Routes
  app.route('/api/customer/:customerId')
    .get(CustomerController.getCustomer);

  app.route('/api/customer').post(validate(paramValidation.create), CustomerController.createCustomer);
};

