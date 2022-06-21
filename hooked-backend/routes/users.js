const User = require("../models/User")
const router = require("express").Router();
const bcrypt = require("bcrypt")

// update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.getSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Acount has been updated")
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        return res.status(403).json("You can only update on your own account!")
    }
});

// delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Acount has been deleted succesfully")
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        return res.status(403).json("You can only delete on your own account!")
    }
});

// get a user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, updatedAt, ...other } = user._doc
        res.status(200).json(other)
    } catch (err) {
        res.status(500).json(err)
    }
});
// {HOOKD BY}

// Know a user // Maestro
router.put("/:id/knows", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId)
            if (!user.knownby.includes(req.body.userId)) {
                await user.updateOne({ $push: { knowby: req.body.userId } });
                await currentUser.updateOne({ $push: { knows: req.body.userId } });
                res.status(200).json('you know this user')
            } else {
                res.status(403).json('you already know this user')
            }
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you already know your yourself. Don't think you don't")
    }
});
// Has Seen a user // Maestro
router.put("/:id/seen", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId)
            if (!user.sawby.includes(req.body.userId)) {
                await user.updateOne({ $push: { seen: req.body.userId } });
                await currentUser.updateOne({ $push: { sawby: req.params.id } });
                res.status(200).json('you snatched the user')
            } else {
                res.status(403).json('you already snatched this user')
            }
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you can't support yourself")
    }
});
// snatch a user
router.put("/:id/unsnatch", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId)
            if (user.snatchers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { snatchers: req.body.userId } });
                await currentUser.updateOne({ $pull: { snatched: req.params.id } });
                res.status(200).json('you have dropped the user')
            } else {
                res.status(403).json('you not snatching this user')
            }
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you can't drop yourself")
    }
})
// unsnatch a user
router.put("/:id/snatch", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId)
            if (!user.snatchers.includes(req.body.userId)) {
                await user.updateOne({ $push: { snatchers: req.body.userId } });
                await currentUser.updateOne({ $push: { snatched: req.params.id } });
                res.status(200).json('you snatched the user')
            } else {
                res.status(403).json('you already unsnatched this user')
            }
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you can't unsnatch yourself")
    }
})
// support a Maestro
// router.put("/:id/support", async (req, res) => {
//     if (req.body.userId !== req.params.id) {
//         try {
//             const user = await User.findById(req.params.id);
//             const currentUser = await User.findById(req.body.userId)
//             if (!user.supports.includes(req.body.userId)) {
//                 await user.updateOne({ $push: { supporters: req.body.userId } });
//                 await currentUser.updateOne({ $push: { supports: req.params.id } });
//                 res.status(200).json("maestro has been supported")
//             } else {
//                 res.status(403).json('you already supports this maestro')
//             }
//         } catch (err) {
//             res.status(500).json(err)
//         }
//     } else {
//         res.status(403).json("you can't support yourself")
//     }
// });

// unsupport a Maestro

// get all users

// get all users from town

module.exports = router;
