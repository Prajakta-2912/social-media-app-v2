const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({

    caption:{
        type:String
    },

    image:{
        type:String
    },

    likes:{
        type:Array,
        default:[]
    }

});

module.exports = mongoose.model("Post", PostSchema);
//good