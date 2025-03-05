const express=require('express');
const connectDB=require('./db');
const inventoryRoutes=require('./routes/inventory');
const cors=require('cors');
require('dotenv').config();

const app=express();
app.use(express.json());
app.use(cors());

//Connect database
connectDB();

//API Routes
app.use('/api/inventory',inventoryRoutes);

//Start server
const PORT=process.env.port || 5000;
app.listen(PORT,() => console.log('Server running on port $({PORT}'));