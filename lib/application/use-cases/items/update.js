const Item = require('../../domains/item')

module.exports = async function (id, params) {
  const item = await Item.findOneAndUpdate({
    _id: id
  }, params, {
    new: true
  })

  if (!item) {
    throw new Error('Item not found')
  }

  return item
}
