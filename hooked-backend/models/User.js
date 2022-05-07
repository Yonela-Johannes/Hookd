const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        require: true,
        min: 4,
        max: 8,
        unique: true,
    },
    username: {
        type: String,
        require: true,
        min: 4,
        max: 8,
    },
    surname: {
        type: String,
        require: true,
        min: 4,
        max: 8,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        max: 14,
    },
    AvatarImage: {
        type: String,
        require: true,
        default: ""
    },
    profileImage: {
        type: String,
        require: true,
        default: ""
    },
    coverImage: {
        type: String,
        require: true,
        default: ""
    },
    password: {
        type: String,
        require: true,
        min: 4,
        max: 8,
    },
    age: {
        type: String,
        require: true,
        min: 2,
        max: 2
    },
    relationship: {
        type: String,
        default: ""
    },
    sex: {
        type: String,
        require: true,
        min: 4,
        max: 6,
    },
    language: {
        type: String,
        require: true,
    },
    languages: {
        type: Array,
        default: [],
    },
    family: {
        type: Array,
        default: []
    },
    bestfriends: {
        type: Array,
        defualt: [],
        max: 2,
    },
    friends: {
        type: Array,
        max: 10,
        default: []
    },
    Knows: {
        type: Array,
        default: []
    },
    Hookd: {
        type: Array,
        default: []
    },
    snatched: {
        type: Array,
        default: []
    },
    supports: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

module.exports = UserSchema;