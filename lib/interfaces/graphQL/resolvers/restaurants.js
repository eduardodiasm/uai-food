const createRestaurant = require('../../../application/use-cases/restaurants/create')
const getRestaurants = require(('../../../application/use-cases/restaurants/get'))

module.exports = {

  Mutation: {
    async createRestaurant (parent, args, context) {
      const { params } = args
      const restaurant = await createRestaurant(params)
      return restaurant
    }
  },

  Query: {
    async restaurants (parent, args, context) {
      return await getRestaurants()
    }
  }

}