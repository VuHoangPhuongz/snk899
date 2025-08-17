import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects, deleteProject } from '../services/api';

function ProjectListPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const { data } = await getProjects();
            setProjects(data);
        } catch (error) {
            console.error("Lỗi khi tải dự án:", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa dự án này?')) {
            await deleteProject(id);
            fetchProjects();
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Quản lý Dự án</h1>
                <Link to="/projects/add" style={{ padding: '10px 15px', backgroundColor: '#2c3e50', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
                    Thêm dự án mới
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Tên dự án</th>
                        <th className="actions">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map(project => (
                        <tr key={project._id}>
                            <td><img src={project.image} alt={project.name} width="100" style={{borderRadius: '4px'}} /></td>
                            <td>{project.name}</td>
                            <td className="actions">
                                <Link to={`/projects/edit/${project._id}`}>Sửa</Link>
                                <button onClick={() => handleDelete(project._id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProjectListPage;
