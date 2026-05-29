const express = require("express");

const router = express.Router();

const Comment =
require("../models/Comment");

router.post("/:postId", async(req,res)=>{

    try{

        const newComment = new Comment({

            postId:req.params.postId,

            text:req.body.text
        });

        const savedComment =
        await newComment.save();

        res.json(savedComment);

    }catch(error){

        res.status(500).json(error);
    }
});

router.get("/:postId", async(req,res)=>{

    try{

        const comments =
        await Comment.find({
            postId:req.params.postId
        });

        res.json(comments);

    }catch(error){

        res.status(500).json(error);
    }
});

module.exports = router;