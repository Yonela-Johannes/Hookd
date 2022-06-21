const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    broadcast: {
        type: String,
        max: 500,
    },
    image: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    },
    love: {
        type: Array,
        default: []
    },
    agree: {
        type: Array,
        default: []
    },
    heartbroken: {
        type: Array,
        default: []
    },
    cry: {
        type: Array,
        default: []
    },
    laugh: {
        type: Array,
        default: []
    },
    views: {
        type: Array,
        default: []
    },
    shared: {
        type: Array,
        default: []
    },
    repost
        : {
        type: Array,
        default: []
    },
    reactions: {
        type: Array,
        default: []
    },
    replies: {
        type: Array,
        default: []
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);