import UserController from './user.controller'

/**
 * Module dependencies
 */
module.exports = function(app) {
  // User Routes
  app.route('/api/users')
    .get(() => {
        console.log(test);
    });
};
