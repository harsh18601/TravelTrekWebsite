const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

require("./db/connect");

const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root Route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to TravelTrek API",
        version: "1.0.0",
        endpoints: ["/api/adventures", "/api/foods", "/api/wellness", "/api/events", "/api/contacts", "/api/places"]
    });
});

// Routes
const adventureRoutes = require("./routes/adventures");
const foodRoutes = require("./routes/foods");
const wellnessRoutes = require("./routes/wellness");
const eventRoutes = require("./routes/events");
const contactRoutes = require("./routes/contacts");
const placeRoutes = require("./routes/places");

app.use("/api/adventures", adventureRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/wellness", wellnessRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/places", placeRoutes);

// Static path (for old templates compatibility if needed, though we will remove them)
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

// Fallback for non-existent API routes
app.use("/api/*", (req, res) => {
    res.status(404).json({ message: "API route not found" });
});

app.listen(port, () => {
    console.log(`Server is running at port no. ${port}`);
    console.log(`API documentation available at http://localhost:${port}/api`);
});