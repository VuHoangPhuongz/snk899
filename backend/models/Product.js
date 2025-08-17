// models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    images: [{ type: String }],
    short_desc: { type: String },
    description: { type: String },
    specs: { type: Map, of: String },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);