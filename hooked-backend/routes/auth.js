const router = require("express").Router()
const User = require("../models/User")
const Maestro = require("../models/Maestro")
const bcrypt = require("bcrypt")

// Register
router.post("/signup", async (req, res) => {
    try {
        // generate new password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        // create new user
        const newUser = await new User({
            nickname: req.body.nickname,
            username: req.body.username,
            surname: req.body.surname,
            email: req.body.email,
            password: hashedPassword,
            age: req.body.age,
            sex: req.body.sex,
            language: req.body.language,
        });
        // save user and return response
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    };
});

router.post("/maestro", async (req, res) => {
    try {
        // generate password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        // create maestro
        const newMaestro = await new Maestro({
            stagename: req.body.stagename,
            username: req.body.username,
            surname: req.body.surname,
            email: req.body.email,
            password: hashedPassword,
            age: req.body.age,
            sex: req.body.sex,
            language: req.body.language,
        });
        //  save and return response
        const user = await newMaestro.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Login
router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ nickname: req.body.nickname });
        !user && res.status(404).json("nickname not found")
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("incorrect password")
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post("/signinmaestro", async (req, res) => {
    try {
        const maestrouser = await Maestro.findOne({ stage: req.body.stagename });
        !maestrouser && res.status(404).json("stagename not found")
        const validPassword = await bcrypt.compare(req.body.password, maestrouser.password)
        !validPassword && res.status(400).json("incorrect password")
        res.status(200).json(maestrouser)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
