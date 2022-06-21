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
        min: 8,
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
    quote: {
        type: String,
        default: "",
        max: 50,
    },
    description: {
        type: String,
        max: 200
    },
    city: {
        type: String,
        default: "Cape Town",
    },
    currentTown: {
        type: String,
        default: ''
    },
    mood: {
        type: String,
        default: ""
    },
    lived: {
        type: Array,
        default: []
    },
    from: {
        type: String,
        default: ""
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
    knows: {
        type: Array,
        default: []
    },
    knownby: {
        type: Array,
        default: []
    },
    seen: {
        type: Array,
        default: []
    },
    sawby: {
        type: Array,
        default: []
    },
    hookd: {
        type: Array,
        default: []
    },
    snatched: {
        type: Array,
        default: []
    },
    snatchers: {
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
},
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);