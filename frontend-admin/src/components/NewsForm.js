import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createNews, getNewsById, updateNews } from '../services/api';

function NewsForm() {
    const [newsItem, setNewsItem] = useState({ title: '', featuredImage: '', content: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchNewsItem = async () => {
                try {
                    const { data } = await getNewsById(id);
                    setNewsItem(data);
                } catch (error) {
                    console.error("Không thể tải dữ liệu tin tức:", error);
                }
            };
            fetchNewsItem();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewsItem(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updateNews(id, newsItem);
            } else {
                await createNews(newsItem);
            }
            navigate('/news');
        } catch (error) {
            console.error("Lỗi khi lưu tin tức:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{id ? 'Chỉnh sửa tin tức' : 'Thêm tin mới'}</h2>
            <div>
                <label>Tiêu đề</label>
                <input name="title" value={newsItem.title} onChange={handleChange} placeholder="Tiêu đề bài viết" required />
            </div>
            <div>
                <label>URL Ảnh đại diện</label>
                <input name="featuredImage" value={newsItem.featuredImage} onChange={handleChange} placeholder="https://example.com/image.jpg" required />
            </div>
            <div>
                <label>Nội dung</label>
                <textarea name="content" value={newsItem.content} onChange={handleChange} placeholder="Nội dung bài viết..." rows="10" required />
            </div>
            <button type="submit">Lưu tin tức</button>
        </form>
    );
}

export default NewsForm;
