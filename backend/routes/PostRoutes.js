const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Posts = require("../models/posts");

// CREATE a post
router.post("/post", async (req, res) => {
    try {
        const newPost = new Posts(req.body);
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// GET single post by ID
router.get("/:id", async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id).populate("author", "username email");
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE a post
router.put("/:id", async (req, res) => {
    try {
        const updatedPost = await Posts.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPost) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE a post
router.delete("/:id", async (req, res) => {
    try {
        const deletedPost = await Posts.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: "Post not found" });
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
