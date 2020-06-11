import {database} from './database';

const Customer = database.import('../src/utils/models/customer');
const Transaction = database.import('../src/utils/models/transaction');

Transaction.associate = (models) => {
    Transaction.belongsTo(models.Customer), {
        foreignKey: 'customer_id',
    }
}

Customer.hasMany(Transaction, {
    foreignKey: 'customer_id'
})

module.exports = {
    Customer,
}