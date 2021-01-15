module.exports = {

  Query: {
    hello () {
      return 'world'
    }
  },

  Mutation: {
    createRestaurant (parent, args, context) {
      return {
        name:  args.params.name
      }
    }
  }

}