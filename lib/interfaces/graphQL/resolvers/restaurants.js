const createRestaurant = require('../../../application/use-cases/restaurants/create')
const getRestaurants = require('../../../application/use-cases/restaurants/get')
const filterRestaurants = require('../../../application/use-cases/restaurants/filter')

const itemDependency = require('../../../application/domains/item')

module.exports = {

  Mutation: {
    async createRestaurant (parent, args, context) {
      const { restaurant: params } = args
      const restaurant = await createRestaurant(params)
      return restaurant
    }
  },

  Query: {
    async restaurants (parent, args, context) {
      return await getRestaurants()
    },

    async filterRestaurants (parent, args, context) {
      const { query } = args
      const filteredRestaurants = await filterRestaurants(itemDependency, query)

      return filteredRestaurants

    }
  }

}