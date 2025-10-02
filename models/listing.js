const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {  
        type: String,
        required: true
    },
    description: String,
    image: {  
        filename: String,
        url: String
    },
    address: String,
    price: Number,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

