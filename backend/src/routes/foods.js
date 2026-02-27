const express = require("express");
const router = express.Router();
const Foods = require("../models/foods");

router.get("/", async (req, res) => {
    try {
        const foodItems = await Foods.find({});
        res.status(200).json(foodItems);
    } catch (error) {
        res.status(500).json({ message: "Error fetching food items", error: error.message });
    }
});

module.exports = router;
