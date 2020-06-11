'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

       

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return [
     await queryInterface.changeColumn('Transactions', 'createdAt', {
      type: 'TIMESTAMP',
       defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
       allowNull: false
     }),

     await queryInterface.changeColumn('Transactions', 'updatedAt', {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
     })
   ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
