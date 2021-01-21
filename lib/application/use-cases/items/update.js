const Item = require('../../domains/item')

module.exports = async function (id, params) {
  const item = await Item.findOneAndUpdate(
    { _id: id }, params, { new: true }
  )

  return item
}
