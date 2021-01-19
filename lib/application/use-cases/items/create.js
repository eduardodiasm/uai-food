const Item = require('../../domains/item')

module.exports = async function (params) {
  const item = await Item.create(params)
  return item
}