const restaurantModel = require('../../domains/restaurant')

module.exports = async function (params) {

  try {
    const restaurant = await restaurantModel.create(params)
    return restaurant
  }

  catch (error) {
    const uniqueConstraintErrorCode = 11000
    if (error.code === uniqueConstraintErrorCode) {
      throw Error(
        'This restaturant name is already in use, please enter another one'
      )
    }
  }

}