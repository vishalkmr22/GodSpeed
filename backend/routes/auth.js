const router = require('express').Router();
const User   = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
  console.log('↗️ [Signup] Body:', req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'Email already registered.' });
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({ name, email, password: hash });
    console.log('✅ [Signup] New user:', email);
    return res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('❌ [Signup] Error:', err);
    return res.status(500).json({ error: 'Signup failed. Please try again.' });
  }
});

router.post('/login', async (req, res) => {
  console.log('↗️ [Login] Body:', req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    console.log('✅ [Login] Success:', email);
    return res.json({ token, user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error('❌ [Login] Error:', err);
    return res.status(500).json({ error: 'Login failed. Please try again.' });
  }
});

module.exports = router;
