const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Maestro")
})

module.exports = router;
