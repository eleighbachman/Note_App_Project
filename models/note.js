var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Note = new Schema( {
  name: { type: String, required: true},
  description: String,
  updatedAt: Date
});

module.exports = mongoose.model('Note', Note);
