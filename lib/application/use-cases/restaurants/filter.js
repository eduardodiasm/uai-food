const restaurantModel = require('../../domains/restaurant')
const itemModel = require('../../domains/item')

// Factory
function createLocationQuery (location) {
  const kmRange = location.range * 1000
  return {
    $near: {
      $geometry: {
        type: 'Point',
        coordinates: [
          location.longitude,
          location.latitude
        ]
      },
      $maxDistance: kmRange
    }
  }
}

function createItemsQuery (items) {
  const associatedRestaurantsIds = items.map(i => i.restaurant.toString())
  const distinctRestaurants = [...new Set(associatedRestaurantsIds)]

  return {
    _id: {
      $in: distinctRestaurants
    }
  }
}

module.exports = async function filter (itemDependency, query) {
  if (query.location) {
    query.location = createLocationQuery(query.location)
  }

  if (query.culinaryType) {
    query.$text = {
      $search: query.culinaryType
    }
  }

  if (query.item) {
    const items = await itemModel.find({
      $text: {
        $search: query.item
      }
    })

    delete query.item

    query = {
      ...query,
      ...createItemsQuery(items)
    }
  }

  const restaurants = await restaurantModel
    .find(query)
    .populate('items')

  return restaurants
}
