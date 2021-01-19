const createItem = require('../../../application/use-cases/items/create')
const updateItem = require('../../../application/use-cases/items/update')

module.exports = {

  Mutation: {

    async createItem (parent, args, context) {
      const { params } = args
      const item = await createItem(params)
      return item
    },

    async updateItem (parent, args, context) {
      const { id, params } = args
      const item = await updateItem(id, params)
      return item
    }

  }

}