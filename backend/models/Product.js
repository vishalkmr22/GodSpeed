const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
});
module.exports = mongoose.model('Product', ProductSchema);
