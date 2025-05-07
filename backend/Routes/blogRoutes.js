const express = require('express');
const Blog = require('../Schema/blogSchema');
const router = express.Router();

// Create Blog Route
router.post('/create', async (req, res) => {
  const { username, topic, descp } = req.body;
  try {
    const blog = new Blog({ username, topic, descp });
    await blog.save();
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get All Blogs Route
router.get('/all', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;