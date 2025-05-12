// backend/routes/team.js
const router = require('express').Router();
const TeamMember = require('../models/TeamMember');

router.get('/', async (req, res) => {
  try {
    const members = await TeamMember.find();
    return res.json(members);
  } catch (err) {
    console.error('❌ [Team] Error:', err);
    return res.status(500).json({ error: 'Failed to load team.' });
  }
});

module.exports = router;
