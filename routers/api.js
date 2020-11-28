const router = require("express").Router();
const request = require("request");
const images = require("../resources/images.json");

router.get("/", (req, res) => {
    res.status(200).json({
        endpoints: ["/api/random"]
    });
});

router.get("/random", (req, res) => {
    const rand = Math.floor(Math.random(0, images.length));
    res.status(200).send(new Buffer(""))
});

module.exports = router;