// async await handlers is express.js
require('express-async-errors');

const path = require('path');
const config = require('../../../config/config');
const sequelize = require('sequelize');
const httpStatus = require('http-status');
const moment = require('moment');

const {
    Customer
} = require(path.resolve('./config/sequelize'));

async function getCustomer(req, res, next) {
    const {customerId: id} = req.params;
    try {
        const customer = await Customer.findOne({
            id,
        })

        return res.json(customer);
    } catch (error) {
        return res.json(error);
    }
}

async function createCustomer(req, res, next) {
    const {firstName, lastName, email} = req.body;

    try {

        const customer = await Customer.create({firstName, lastName, email});

        return res.json(customer);
    } catch(error) {
        return res.json(error);
    }
}

module.exports = {
    getCustomer,
    createCustomer,
}