// backend/routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.route('/').get(projectController.getProjects).post(projectController.createProject);
router.route('/:id').get(projectController.getProjectById).put(projectController.updateProject).delete(projectController.deleteProject);

module.exports = router;