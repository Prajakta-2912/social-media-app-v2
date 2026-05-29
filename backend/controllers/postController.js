const Post = require("../models/Post");
const Comment = require("../models/Comment");

exports.createPost = async(req,res)=>{

    try{

        const newPost = new Post(req.body);

        await newPost.save();

        res.status(201).json({
            message:"Post Created"
        });

    }catch(error){

        res.status(500).json(error);

    }
};

exports.getPosts = async(req,res)=>{

    try{

        const posts = await Post.find().sort({
            createdAt:-1
        });

        res.json(posts);

    }catch(error){

        res.status(500).json(error);

    }
};

exports.likePost = async(req,res)=>{

    try{

        const post = await Post.findById(req.params.id);

        post.likes.push(post._id);

        await post.save();

        res.json({
            message:"Post Liked"
        });

    }catch(error){

        res.status(500).json(error);

    }
};
exports.addComment = async(req,res)=>{

    try{

        const newComment = new Comment({

            postId:req.params.id,

            text:req.body.text

        });

        await newComment.save();

        res.json({
            message:"Comment Added"
        });

    }catch(error){

        res.status(500).json(error);

    }
};
exports.getComments = async(req,res)=>{

    try{

        const comments = await Comment.find({
            postId:req.params.id
        });

        res.json(comments);

    }catch(error){

        res.status(500).json(error);

    }
};