const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({

    postId:{
        type:String
    },

    text:{
        type:String
    }

});

module.exports =
mongoose.model("Comment", CommentSchema);