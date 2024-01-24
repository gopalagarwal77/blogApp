require("dotenv").config();

const mongoose = require("mongoose");

const connectWithDb = ()=>{
    // Connect to MongoDB using Mongoose.
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("Db connected successfully"))
    .catch((err)=> {
        console.log("DB facing connection issues");
        console.log(err);
        process.exit(1);
    })
};

module.exports = connectWithDb;