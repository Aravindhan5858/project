const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  username: { type: String, required: true },
  date: { type: Date, default: Date.now },
  topic: { type: String, required: true },
  descp: { type: String, required: true }
});

module.exports = mongoose.model('Blog', BlogSchema);