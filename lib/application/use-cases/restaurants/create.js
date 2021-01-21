const Restaurant = require('../../domains/restaurant')

module.exports = async function (params) {
  const { name } = params

  const isNameAlreadyInUse = await Restaurant.findOne({
    name
  })

  if (isNameAlreadyInUse) {
    throw new Error(
      'That restaurant name is already in use, please enter another one'
    )
  }

  const restaurant = await Restaurant.create(params)
  return restaurant
}
