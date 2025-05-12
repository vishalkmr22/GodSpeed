const mongoose = require('mongoose');
const PricingPlanSchema = new mongoose.Schema({
  name: String,
  price: Number,
  features: [String],
});
module.exports = mongoose.model('PricingPlan', PricingPlanSchema);
