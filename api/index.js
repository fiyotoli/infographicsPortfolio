import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import connectCloudinary from './config/Cloudinary.js';

import productRouter from './routes/productRoutes.js';

// App Config
const app = express(); // ✅ Define app first
const port = process.env.PORT || 4000;

// Database and Cloudinary Connection
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// API Endpoints
app.use('/api/product', productRouter);

// Sample Route
app.get("/", (req, res) => {
    res.send("Welcome to the E-Commerce API!");
  });

// Server Listener
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
