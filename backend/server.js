const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

// Routes
const inventoryRoutes = require('./routes/inventory');
app.use('/api/inventory', inventoryRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
