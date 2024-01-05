// database related modules
require('dotenv').config();

module.exports = {
    databaseConnection: require('./connection'),
    ShoppingRepository: require('./repository/shopping-repository')
}