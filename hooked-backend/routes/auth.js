const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Hey it auth js!")
})

module.exports = router;
