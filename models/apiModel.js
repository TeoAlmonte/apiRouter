const mongoose = require('mongoose'),
  Schema = mongoose.Schema();

let sandModel = mongoose.Schema({
  title: {
    type: String
  },
  age: {
    type: String
  },
  city: {
    type: String
  },
  color: {
    type: String
  },
  height: {
    type: String
  }
})

module.exports = mongoose.model('sand', sandModel);