const Sequelize = require('sequelize')
const config = require('../config/postgres')

module.exports = {
  startConnection () {
    const connection = new Sequelize(config)
    return connection
  }
}
