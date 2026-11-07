// Dotenv ko sabse upar require karein
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Main Route (Kyunki main route nahi hone par 404 aata hai)
app.get('/', (req, res) => {
  res.send('🎮 Esports Tournament Backend is Running Successfully!');
});

// Example API Route
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'Active', 
    message: 'API is working fine on Vercel' 
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// VERCEL KE LIYE SABSE ZAROORI LINE (Iske bina serverless function kaam nahi karega)
module.exports = app;
