// async await handlers is express.js
require('express-async-errors');

const path = require('path');
const config = require('../../../config/config');
const sequelize = require('sequelize');
const httpStatus = require('http-status');
const moment = require('moment');

const {
    Customer,
    Transaction
} = require(path.resolve('./config/sequelize'));

async function getCustomer(req, res, next) {
    const {customerId: id} = req.params;
    try {
        const customer = await Customer.findOne({
            where: {
               id: id,
            },
            include: [{
                model: Transaction,
            }]
        })

        return res.json(customer);
    } catch (error) {
        return res.json(error);
    }
}

async function createCustomer(req, res, next) {
    const {firstName, lastName, email} = req.body;
    let err;

    try {

        const customerFindEmail = await Customer.findOne({
            where: {
                email,
            }
        })

        if (customerFindEmail) {
            err = new Error('Email existed already');
            err.status = 500;
            return next(err);
        }

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