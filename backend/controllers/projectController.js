// backend/controllers/projectController.js
const Project = require('../models/Project');

// Lấy tất cả dự án
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Lấy dự án theo ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Tạo dự án mới
exports.createProject = async (req, res) => {
    const project = new Project(req.body);
    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Cập nhật dự án
exports.updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Xóa dự án
exports.deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: 'Dự án đã được xóa' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};