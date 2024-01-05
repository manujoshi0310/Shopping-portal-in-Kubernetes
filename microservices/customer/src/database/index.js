// database related modules
require('dotenv').config();

module.exports = {
    databaseConnection: require('./connection'),
    CustomerRepository: require('./repository/customer-repository'),
}