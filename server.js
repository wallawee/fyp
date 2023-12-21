const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fyp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define your MongoDB schema
const psuSchema = new mongoose.Schema({
  name: String,
  wattage: Number,
  efficiency: String,
  color: String,
  type: String,
  modular: Boolean,
  price: Number,
});

// Create a MongoDB model
const Psu = mongoose.model('Psu', psuSchema);

// Define your API routes
app.get('/api/psus', async (req, res) => {
  try {
    const psus = await Psu.find();
    res.json(psus);
  } catch (error) {
    console.error('Error fetching psus:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
