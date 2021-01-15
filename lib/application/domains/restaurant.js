const { Model, DataTypes } = require('sequelize')

class Restaurant extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      site: DataTypes.STRING,
      description: DataTypes.TEXT,

    },
    {
      tableName: 'restaurants',
      sequelize
    })
  }

  static associate (models) {
    
  }
}

module.exports = Restaurant