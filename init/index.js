const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
.then((res) =>{console.log("connected to DB")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderstay');
}

const initDB = async () =>{
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj) =>({
    ...obj, owner: "6a8b1988c89453080a0a5aa6"
   }))
   await Listing.insertMany(initData.data);
   console.log("data was initialized");
}
initDB();   