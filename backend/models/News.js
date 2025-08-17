// backend/models/News.js
const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    featuredImage: { type: String, required: true }, // URL ảnh đại diện
    content: { type: String, required: true }, // Nội dung bài viết
}, { timestamps: true });

module.exports = mongoose.model('News', NewsSchema);