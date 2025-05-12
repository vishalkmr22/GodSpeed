// backend/routes/product.js
const router = require('express').Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const items = await Product.find();
    return res.json(items);
  } catch (err) {
    console.error('❌ [Product] Error:', err);
    return res.status(500).json({ error: 'Failed to load products.' });
  }
});

module.exports = router;
