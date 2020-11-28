const router = require("express").Router();
const request = require("request");
const images = require("../resources/images.json");

router.get("/", (req, res) => {
    res.status(200).json({
        endpoints: ["/api/random"]
    });
});

router.get("/random", (req, res) => {
    const rand = Math.floor(Math.random() * Math.floor(images.length));
    request(images[rand], { method: "get", encoding: null }, function(err, response, body){
        if(err) throw err;
        const buffer = new Buffer.from(body, "base64");
        
        res.writeHead(200, { "Content-Type": "image/png", "Content-Length": buffer.length });
        res.end(buffer);
    });
});

module.exports = router;