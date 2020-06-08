import CustomerController from './customer.controller'

/**
 * Module dependencies
 */
module.exports = function(app) {
  // User Routes
  app.route('/api/customer/:customerId')
    .get(CustomerController.getCustomer);
};
