const createItem = require('../../../application/use-cases/items/create')

module.exports = {

  Mutation: {
    async createItem (parent, args, context) {
      const { params } = args
      const item = await createItem(params)
      return item
    }
  }

}