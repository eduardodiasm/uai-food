const Item = require('../../domains/item')
const Restaurant = require('../../domains/restaurant')

module.exports = async function (params) {
  const { restaurant } = params
  const restaurantExists = await Restaurant.findById(restaurant)

  if (!restaurantExists) throw new Error('Restaurant not found')

  const item = await Item.create(params)

  // Add the item id in the items column in the restaurant table

  await Restaurant.findOneAndUpdate({
    _id: restaurant
  }, {
    $push: { items: item._id }
  })

  return item
}
