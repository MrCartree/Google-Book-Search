const mongoose = require("mongoose");
const db = require("../models/index");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = {
    authors: [""],
    description: "",
    image: "",
    link: "",
    title: ""
}

