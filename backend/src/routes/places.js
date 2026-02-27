const express = require("express");
const router = express.Router();
const Hashtags = require("../models/hashtags");

router.get("/", async (req, res) => {
    try {
        const posts = await Hashtags.find({});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching places to go", error: error.message });
    }
});

module.exports = router;
