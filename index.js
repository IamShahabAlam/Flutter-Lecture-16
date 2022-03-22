const express = require("express");
 // Creating a server and calling it in app 
const app = express();
//  creating a local port
const port = 5000;

//  now creating a basic API
//  using get method with its arguments 
//  using Backslash for path
//  first request and its respone 
//  Arrow function 
//  then Statement
app.get("/",(req,res)=>{
    res.send("Hello world from the very first API on CHROME");
})

//  To run App / Server
// calling port 
app.listen(port,()=>{
    console.log("Server is Running");
})

// node index.js        // for simple output every time in CMD
// localhost:5000       // for output on chrome 
// npm start            // for output from nodemon which auto updates output after changes done
