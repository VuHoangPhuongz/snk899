// frontend-admin/src/pages/ProductListPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from '../services/api';

function ProductListPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const { data } = await getProducts();
        setProducts(data);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
            await deleteProduct(id);
            fetchProducts(); // Tải lại danh sách sản phẩm
        }
    };

    return (
        <div>
            <h1>Quản lý Sản phẩm</h1>
            <Link to="/products/add">Thêm sản phẩm mới</Link>
            <table>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>SKU</th>
                        <th>Danh mục</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.sku}</td>
                            <td>{product.category}</td>
                            <td>
                                <Link to={`/products/edit/${product._id}`}>Sửa</Link>
                                <button onClick={() => handleDelete(product._id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductListPage;