const mongoose = require("mongoose");


const adventurethings = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    cost: {
        type: String,
        require: true
    },
    bestTimeToVisit: {
        type: String,
        require: false
    }
})

const adventurous = mongoose.model("adventurous", adventurethings);

module.exports = adventurous;