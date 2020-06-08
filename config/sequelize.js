import {database} from './database';

const Customer = database.import('../src/models/customer');

module.exports = {
    Customer,
}