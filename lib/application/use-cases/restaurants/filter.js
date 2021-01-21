const restaurantModel = require('../../domains/restaurant')

// Factory
function createLocationQuery (location) {
  const kmRange = location.range * 1000
  return {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [
          location.longitude,
          location.latitude
        ]
      },
      $maxDistance: kmRange,
    }
  }
}

module.exports = async function filter(query) {
  if (query.location) {
    query.location = createLocationQuery(query.location)
  }

  const restaurants = await restaurantModel.find(query)

  return restaurants
}