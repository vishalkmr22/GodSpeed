// backend/server.js
require('dotenv').config();
console.log('🔑 MONGO_URI:', process.env.MONGO_URI);

const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app = express();

// 1) CORS config: this alone will handle OPTIONS preflights
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

// 2) JSON body parser
app.use(express.json());

// 3) Mount your routers (all with RELATIVE paths)
app.use('/api/auth',    require('./routes/auth'));
app.use('/api/team',    require('./routes/team'));
app.use('/api/product', require('./routes/product'));
app.use('/api/pricing', require('./routes/pricing'));

// 4) Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 5) Connect to MongoDB & start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('⛓️ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
