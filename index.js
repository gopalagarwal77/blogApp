const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT ||4000;

// middleware 
app.use(express.json()); // for parsing application/json
// routes
const blog = require("./routes/blog");
// mount
app.use("/api/v1", blog);

// database connection
const connectWithDb = require("./config/database");
connectWithDb();

// start the server
app.listen(PORT,()=>{
    console.log(`Server is running on port no ${ PORT }`);
})

app.get("/",(req,res)=>{
    res.send(`<h1> This is a Home page baby`)
})