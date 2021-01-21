const mongoose = require('mongoose')
const uri = process.env.MONGO_URI

module.exports = {

  asyncConnect () {
    return mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  }
}
