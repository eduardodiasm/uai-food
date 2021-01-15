const createRestaurant = require('../../../application/use-cases/restaurants/create')

module.exports = {

  Mutation: {
    async createRestaurant (parent, args, context) {
      const { params } = args
      const restaurant = await createRestaurant(params)
      return restaurant
    }
  }

}