const { Model, DataTypes } = require('sequelize')

class Restaurant extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      tableName: 'restaurants',
      sequelize
    })
  }

  static associate (models) {
    
  }
}

module.exports = Restaurant