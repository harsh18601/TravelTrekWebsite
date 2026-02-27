const express = require("express");
const router = express.Router();
const Contact = require("../models/contacts");
const { body, validationResult } = require("express-validator");

router.post("/",
    body("email").isEmail().withMessage("Invalid email"),
    body("firstName").notEmpty().withMessage("First name is required"),
    body("message").notEmpty().withMessage("Message is required"),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const addCustomer = new Contact(req.body);
            const contacted = await addCustomer.save();
            res.status(201).json({ message: "Contact request submitted successfully", data: contacted });
        } catch (error) {
            res.status(500).json({ message: "Error saving contact request", error: error.message });
        }
    }
);

module.exports = router;
