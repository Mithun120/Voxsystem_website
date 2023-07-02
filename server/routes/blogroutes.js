const express = require('express');
const router = express.Router();

// Blog model
const Blog = require('../models/blog');

// Get all blog posts
router.get("/blogget", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve blog posts" });
  }
});

// Create a new blog post
router.post("/blogpost", async (req, res) => {
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ error: "Internal server error!" });
  }
});

// Delete a blog post
router.delete("/blogdelete/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.status(200).json({ message: "Blog post deleted", deletedBlog });
  } catch (err) {
    res.status(500).json({ error: "Internal server error!" });
  }
});

module.exports = router;
