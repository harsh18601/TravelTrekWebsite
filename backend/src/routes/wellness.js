const express = require("express");
const router = express.Router();
const Wellness = require("../models/wellness");

router.get("/", async (req, res) => {
    try {
        const wellnessItems = await Wellness.find({});
        res.status(200).json(wellnessItems);
    } catch (error) {
        res.status(500).json({ message: "Error fetching wellness items", error: error.message });
    }
});

module.exports = router;
