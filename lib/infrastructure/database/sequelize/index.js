const Sequelize = require('sequelize')
const config = require('../config/postgres')

const restaurantModel = require('../../../application/domains/restaurant')

module.exports = {
  startConnection () {
    const connection = new Sequelize(config)

    restaurantModel.init(connection)
    restaurantModel.associate(connection.models)

    return connection
  }
}
