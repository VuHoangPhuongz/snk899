// backend/routes/newsRoutes.js
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

router.route('/').get(newsController.getNews).post(newsController.createNews);
router.route('/:id').get(newsController.getNewsById).put(newsController.updateNews).delete(newsController.deleteNews);

module.exports = router;