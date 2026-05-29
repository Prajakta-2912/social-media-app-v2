const User = require("../models/User");

exports.followUser = async(req,res)=>{

    try{
        console.log(req.body);

console.log(req.params.id);

        const currentUser = await User.findById(req.body.userId);

        const targetUser = await User.findById(req.params.id);

        if(!currentUser || !targetUser){

            return res.status(404).json({
                message:"User not found"
            });
        }

        if(!targetUser.followers.includes(req.body.userId)){

            targetUser.followers.push(req.body.userId);

            currentUser.following.push(req.params.id);

            await targetUser.save();

            await currentUser.save();

            res.json({
                message:"User Followed Successfully"
            });

        }else{

            res.status(400).json({
                message:"Already Following"
            });
        }

    }catch(error){

        console.log(error);

        res.status(500).json({
            message:"Server Error"
        });
    }
};

exports.unfollowUser = async(req,res)=>{

    try{

        const currentUser = await User.findById(req.body.userId);

        const targetUser = await User.findById(req.params.id);

        if(!currentUser || !targetUser){

            return res.status(404).json({
                message:"User not found"
            });
        }

        if(targetUser.followers.includes(req.body.userId)){

            targetUser.followers.pull(req.body.userId);

            currentUser.following.pull(req.params.id);

            await targetUser.save();

            await currentUser.save();

            res.json({
                message:"User Unfollowed"
            });

        }else{

            res.status(400).json({
                message:"Not Following"
            });
        }

    }catch(error){

        console.log(error);

        res.status(500).json({
            message:"Server Error"
        });
    }
};