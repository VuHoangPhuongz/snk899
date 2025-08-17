// backend/seeder.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const products = require('./data/products'); // Import dữ liệu sản phẩm
const Product = require('./models/Product'); // Import model Product

dotenv.config(); // Nạp các biến môi trường từ file .env

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected for Seeder...');
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

const importData = async () => {
    try {
        // 1. Xóa hết dữ liệu sản phẩm cũ để tránh trùng lặp
        await Product.deleteMany();
        console.log('Data Destroyed!');

        // 2. Thêm tất cả sản phẩm từ file data/products.js
        await Product.insertMany(products);
        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Product.deleteMany();
        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

// Hàm chính để chạy script
const run = async () => {
    await connectDB();

    if (process.argv[2] === '-d') {
        await destroyData();
    } else {
        await importData();
    }
};

run();
