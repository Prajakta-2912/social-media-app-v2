const express = require("express");

const router = express.Router();

const Post = require("../models/post");

router.post("/", async (req, res) => {

    try {

        const newPost = new Post({
            caption: req.body.caption,
            image: req.body.image
        });

        const savedPost = await newPost.save();

        res.json(savedPost);

    } catch (error) {

        res.status(500).json(error);
    }
});

router.get("/", async (req, res) => {

    try {

        const posts = await Post.find();

        res.json(posts);

    } catch (error) {

        res.status(500).json(error);
    }
});

router.put("/like/:id", async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        post.likes.push("demoUser");

        await post.save();

        res.json(post);

    } catch (error) {

        res.status(500).json(error);
    }
});

module.exports = router;