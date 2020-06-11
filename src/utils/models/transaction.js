'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    customer_id: { type: Sequelize.INTEGER, validate: { notNull: false } },
    transaction_name: DataTypes.STRING,
    transaction_type: DataTypes.STRING,
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
  };
  return Transaction;
};