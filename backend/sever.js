// backend/server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// --- BƯỚC 1: IMPORT PRODUCT ROUTES ---
const productRoutes = require('./routes/productRoutes');
const projectRoutes = require('./routes/projectRoutes'); // Mới
const newsRoutes = require('./routes/newsRoutes'); 
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Kết nối tới MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// --- BƯỚC 2: SỬ DỤNG PRODUCT ROUTES ---
// Báo cho server biết mọi request đến '/api/products' sẽ do productRoutes xử lý
app.use('/api/products', productRoutes);
app.use('/api/projects', projectRoutes); // Mới
app.use('/api/news', newsRoutes);  

// Route cơ bản để kiểm tra server
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));