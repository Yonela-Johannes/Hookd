const Post = require("../models/Post");
const User = require("../models/User");
const router = require("express").Router();

// create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savePost = await newPost.save()
        res.status(200).json(savePost)
    } catch (err) {
        res.status(500).json(err)
    }
})
// update a post
router.put("/:id", async (req, res) => {
    try {
        const post = Post.findById(req.params.id);
        if (post.userId == req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("your post has been updated")
        } else {
            res.status(403).json("you can update only your own post")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});
// delete a post
router.delete("/:id", async (req, res) => {
    try {
        console.log(Post.findById(reg.params.id))
        const post = Post.findById(req.params.id);
        if (post.userId == req.body.userId) {
            await post.deleteOne({ $set: req.body });
            res.status(200).json("your post has been deleted")
        } else {
            res.status(403).json("you can delete only your own post")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});
// like/dislike a post

router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } })
            res.status(200).json("you like post");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } })
            res.status(200).json("you disliked the post");
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// love a post
router.put("/:id/love", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.love.includes(req.body.userId)) {
            await post.updateOne({ $push: { love: req.body.userId } })
            res.status(200).json("you love post");
        } else {
            await post.updateOne({ $pull: { love: req.body.userId } })
            res.status(200).json("you don't love post");
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
// agree a post
router.put("/:id/agree", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.agree.includes(req.body.userId)) {
            await post.updateOne({ $push: { agree: req.body.userId } })
            res.status(200).json("you agree");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } })
            res.status(200).json("you disagree");
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
// hearbroken
router.put("/:id/heartbroken", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.agree.includes(req.body.userId)) {
            await post.updateOne({ $push: { heartbroken: req.body.userId } })
            res.status(200).json("your heart is broken");
        } else {
            await post.updateOne({ $pull: { heartbroken: req.body.userId } })
            res.status(200).json("your heart is not broken");
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
// cry
router.put("/:id/cry", async (req, res) => {
    console.log(req.body.userId)
    try {
        const post = await Post.findById(req.params.id);
        if (!post.agree.includes(req.body.userId)) {
            await post.updateOne({ $push: { cry: req.body.userId } })
            res.status(200).json("yo cry");
        } else {
            await post.updateOne({ $pull: { cry: req.body.userId } })
            res.status(200).json("you don't cry");
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
// laugh
router.put("/:id/laugh", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.agree.includes(req.body.userId)) {
            await post.updateOne({ $push: { laugh: req.body.userId } })
            res.status(200).json("you laugh");
        } else {
            await post.updateOne({ $pull: { laugh: req.body.userId } })
            res.status(200).json("you do not laugh");
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
// views
// router.put("/:id/views", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         if (!post.agree.includes(req.body.userId)) {
//             await post.updateOne({ $push: { views: req.body.userId } })
//             res.status(200).json("you is broken");
//         } else {
//             await post.updateOne({ $pull: { views: req.body.userId } })
//             res.status(200).json("you heart is not broken");
//         }
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })



// shared

// repost

// reactions

// get a post 
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})
// get timeline post
router.get("/timeline/all", async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId)
        const userPosts = await Post.find({ userId: currentUser._id })
        const friendPost = await Promise.all(
            currentUser.knows.map((knowId) => {
                return Post.find({ userId: knowId })
            })
        );
        res.json(userPosts.concat(...friendPost))
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;