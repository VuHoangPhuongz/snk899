// backend/models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }, // Sẽ lưu URL của ảnh
    description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);