const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing"); // model path

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/test";

// Connect to MongoDB
mongoose.connect(MONGO_URL)
    .then(() => console.log("DB is connected"))
    .catch((err) => console.log("DB connection error:", err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Root route
app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

// Show all listings
app.get("/listings", async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(8080, () => {
    console.log("✅ Server is running on port 8080");
});
