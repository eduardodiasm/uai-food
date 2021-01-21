const restaurantModel = require('../../domains/restaurant')

module.exports = async function (params) {
  const { name } = params

  const isNameAlreadyInUse = await restaurantModel.findOne({
    name
  })

  if (isNameAlreadyInUse) {
    throw new Error(
      'That restaurant name is already in use, please enter another one'
    )
  }

  const restaurant = await restaurantModel.create(params)
  return restaurant
}
