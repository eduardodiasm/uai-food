const uri = process.env.MONGO_URI
const mongoose = require('mongoose')

module.exports = {
  
  asyncConnect () {
    return mongoose.connect(uri, {
      useNewUrlParser: true, useUnifiedTopology: true
    })
  }

}