// database related modules
require('dotenv').config();

module.exports = {
    databaseConnection: require('./connection'),
    ProductRepository: require('./repository/product-repository')
}