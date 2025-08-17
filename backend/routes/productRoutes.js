// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET /api/products - Lấy tất cả sản phẩm
router.get('/', productController.getProducts);

// GET /api/products/:id - Lấy sản phẩm theo ID
router.get('/:id', productController.getProductById);

// POST /api/products - Tạo sản phẩm mới
router.post('/', productController.createProduct);

// PUT /api/products/:id - Cập nhật sản phẩm
router.put('/:id', productController.updateProduct);

// DELETE /api/products/:id - Xóa sản phẩm
router.delete('/:id', productController.deleteProduct);

module.exports = router;