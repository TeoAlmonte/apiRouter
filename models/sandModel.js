const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SandSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

// Export Schema
mongoose.model('sands', SandSchema)