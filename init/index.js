require("dotenv").config();

const mongoose = require("mongoose");

const initData = require("./data.js");

const Listing = require("../models/listing.js");

main()
    .then(() => {
        console.log("connected to DB");
        return initDB();
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.ATLASDB_URL);
}

const initDB = async () => {

    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6a929a22c6852ce6738ab434"
    }));

    await Listing.insertMany(initData.data);

    console.log("data was initialized");
    await mongoose.connection.close();
};