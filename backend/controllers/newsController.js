// backend/controllers/newsController.js
const News = require('../models/News');

exports.getNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getNewsById = async (req, res) => {
    try {
        const newsItem = await News.findById(req.params.id);
        res.json(newsItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createNews = async (req, res) => {
    const newsItem = new News(req.body);
    try {
        const newNewsItem = await newsItem.save();
        res.status(201).json(newNewsItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateNews = async (req, res) => {
    try {
        const updatedNews = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteNews = async (req, res) => {
    try {
        await News.findByIdAndDelete(req.params.id);
        res.json({ message: 'Tin tức đã được xóa' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};