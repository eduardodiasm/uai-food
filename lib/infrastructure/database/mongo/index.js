const mongoose = require('mongoose')
const uri = process.env.MONGO_URI

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: true
}

module.exports = {

  asyncConnect () {
    return mongoose.connect(uri, options)
  }
}
