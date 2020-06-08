import Sequelize from 'sequelize';
import {config} from './config';

const database = new Sequelize(
  config.database.name,
  config.database.username,
  config.database.password, {
    host: config.database.host,
    dialect: 'mysql' || 'postgres',
    // dialectOptions: {
    //   useUTC: false, // for reading from database
    //   dateStrings: true,
    //   typeCast: function (field, next) { // for reading from database
    //     if (field.type === 'DATETIME') {
    //       return field.string()
    //     }
    //       return next()
    //   }
    // },
    // timezone: 'Asia/Singapore',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    // storage: path.join(process.cwd(), 'db', 'database.sqlite')
  },
);



module.exports = {
  database,
}