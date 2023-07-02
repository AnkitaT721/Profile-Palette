const dotenv = require("dotenv");
// const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require('path');


dotenv.config({ path: "./config.env" });

require("./db/connection");

app.use(express.json());

//link the router files to make our way easy
app.use(require("./router/auth"));

//const DB = process.env.DATABASE;
const PORT = process.env.PORT || 8000;

// Let Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/./client/build/index.html'));
})


// Rest of backend code...


//middleware

// const middleware = (req, res, next) => {
//     console.log("middleware");
//     next();
// }

// app.get('/', (req, res) => {
//     res.send("Hello world from app!");
// });

// app.get('/about', (req, res) => {
//     res.send("about!");
// });

// app.get('/contact', (req, res) => {
//     res.send("contact!");
// });

app.get("/signin", (req, res) => {
  res.send("login!");
});

app.get("/signup", (req, res) => {
  res.send("registration!");
});


app.listen(PORT, () => {
  console.log("server is running");
});
