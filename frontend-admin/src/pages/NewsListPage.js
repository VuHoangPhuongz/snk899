import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getNews, deleteNews } from '../services/api';

function NewsListPage() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const { data } = await getNews();
            setNews(data);
        } catch (error) {
            console.error("Lỗi khi tải tin tức:", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa tin tức này?')) {
            await deleteNews(id);
            fetchNews();
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Quản lý Tin Tức</h1>
                <Link to="/news/add" style={{ padding: '10px 15px', backgroundColor: '#2c3e50', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
                    Thêm tin mới
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Ảnh đại diện</th>
                        <th>Tiêu đề</th>
                        <th className="actions">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map(item => (
                        <tr key={item._id}>
                            <td><img src={item.featuredImage} alt={item.title} width="100" style={{borderRadius: '4px'}} /></td>
                            <td>{item.title}</td>
                            <td className="actions">
                                <Link to={`/news/edit/${item._id}`}>Sửa</Link>
                                <button onClick={() => handleDelete(item._id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NewsListPage;
