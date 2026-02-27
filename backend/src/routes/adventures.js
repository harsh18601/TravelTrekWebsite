const express = require("express");
const router = express.Router();
const Adventurous = require("../models/adventurous");

router.get("/", async (req, res) => {
    try {
        const adventures = await Adventurous.find({});
        res.status(200).json(adventures);
    } catch (error) {
        res.status(500).json({ message: "Error fetching adventures", error: error.message });
    }
});

module.exports = router;
