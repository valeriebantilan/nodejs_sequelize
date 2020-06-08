import UserController from './customer.controller'

/**
 * Module dependencies
 */
module.exports = function(app) {
  // User Routes
  app.route('/api/customer')
    .get((req, res, next) => {
        console.log('test');

        return res.json({success: true});
    });
};
