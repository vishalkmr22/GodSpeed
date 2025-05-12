// backend/routes/pricing.js
const router = require('express').Router();
const Plan   = require('../models/PricingPlan');

router.get('/', async (req, res) => {
  try {
    const plans = await Plan.find();
    return res.json(plans);
  } catch (err) {
    console.error('❌ [Pricing] Error:', err);
    return res.status(500).json({ error: 'Failed to load pricing.' });
  }
});

module.exports = router;
