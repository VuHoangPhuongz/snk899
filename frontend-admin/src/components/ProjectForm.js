import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createProject, getProjectById, updateProject } from '../services/api';

function ProjectForm() {
    const [project, setProject] = useState({ name: '', image: '', description: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchProject = async () => {
                try {
                    const { data } = await getProjectById(id);
                    setProject(data);
                } catch (error) {
                    console.error("Không thể tải dữ liệu dự án:", error);
                }
            };
            fetchProject();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updateProject(id, project);
            } else {
                await createProject(project);
            }
            navigate('/projects');
        } catch (error) {
            console.error("Lỗi khi lưu dự án:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{id ? 'Chỉnh sửa dự án' : 'Thêm dự án mới'}</h2>
            <div>
                <label>Tên dự án</label>
                <input name="name" value={project.name} onChange={handleChange} placeholder="Tên dự án" required />
            </div>
            <div>
                <label>URL Hình ảnh</label>
                <input name="image" value={project.image} onChange={handleChange} placeholder="https://example.com/image.jpg" required />
            </div>
            <div>
                <label>Mô tả</label>
                <textarea name="description" value={project.description} onChange={handleChange} placeholder="Mô tả ngắn về dự án" rows="4" />
            </div>
            <button type="submit">Lưu dự án</button>
        </form>
    );
}

export default ProjectForm;