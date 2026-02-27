const express = require("express");
const router = express.Router();
const Events = require("../models/events");

router.get("/", async (req, res) => {
    try {
        const events = await Events.find({});
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: "Error fetching events", error: error.message });
    }
});

module.exports = router;
