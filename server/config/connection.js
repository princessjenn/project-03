const mongoose = require("mongoose");
const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51NKqHZAHNHXMcTQvYN5jUSg9srl4Olpk2yP8vXOJzLAYjPiT71digcnWVsLYBPsnxQnkRTHnsfoMPqkLzAXmdxOL004a9AwouR')
;

// MongoDB connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/barbershop_db"
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Config endpoint
app.get('/config', async (req, res) => {
  try {
    // Fetch the publishable key from Stripe
    const { publishableKey } = await stripe.accounts.retrieve('acct_1NKqHZAHNHXMcTQv');

    // Send the publishable key as a JSON response
    res.json({ publishableKey });
  } catch (error) {
    // Handle any errors that occur during the Stripe API request
    console.error('Error retrieving publishable key:', error);
    res.status(500).json({ error: 'Unable to retrieve publishable key' });
  }
});

// ... Additional server-side code ...

// Start the server
const server = app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

module.exports = {
  server,
  db,
};
