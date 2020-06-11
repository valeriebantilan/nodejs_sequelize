import {database} from './database';

const Customer = database.import('../src/utils/models/customer');
const Transaction = database.import('../src/utils/models/transaction');

Customer.hasMany(Transaction, {
    foreignKey: 'customer_id'
})

Transaction.associate = (models) => {
    Transaction.belongsTo(models.Customer), {
        foreignKey: 'customer_id',
    }
}


module.exports = {
    Customer,
    Transaction,
}