const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Create Schema
const SandSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  age: {type: String},
  gang: {type: String}
});

// Export Schema
mongoose.model('sands', SandSchema);