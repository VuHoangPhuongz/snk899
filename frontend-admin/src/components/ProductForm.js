// frontend-admin/src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createProduct, getProductById, updateProduct } from '../services/api';

function ProductForm() {
    const [product, setProduct] = useState({ name: '', sku: '', category: '', short_desc: '', description: '' });
    const navigate = useNavigate();
    const { id } = useParams(); // Lấy ID từ URL nếu là trang edit

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                const { data } = await getProductById(id);
                setProduct(data);
            };
            fetchProduct();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateProduct(id, product);
        } else {
            await createProduct(product);
        }
        navigate('/products'); // Quay về trang danh sách sau khi submit
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{id ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}</h1>
            <input name="name" value={product.name} onChange={handleChange} placeholder="Tên sản phẩm" required />
            <input name="sku" value={product.sku} onChange={handleChange} placeholder="SKU" required />
            <input name="category" value={product.category} onChange={handleChange} placeholder="Danh mục" required />
            <textarea name="short_desc" value={product.short_desc} onChange={handleChange} placeholder="Mô tả ngắn" />
            <textarea name="description" value={product.description} onChange={handleChange} placeholder="Mô tả chi tiết" />
            <button type="submit">Lưu sản phẩm</button>
        </form>
    );
}

export default ProductForm;