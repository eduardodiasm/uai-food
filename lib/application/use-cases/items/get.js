const itemModel = require('../../domains/item')

module.exports = async function get () {
  const items = await itemModel
    .find()

  return items
}
