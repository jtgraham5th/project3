require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose connected successfully");
});
connection.on("error", (err) => {
    console.log("Mongoose default connection error: " + err);
});

app.get("/api/drinks/:id", function(req, res) {
    db.Drinks.findById(req.params.id)
    .then((singledrinks) => {
        res.json({
            message: "Requested all Drinks",
            error: false,
            data: singledrinks
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
});

app.get("/api/drinks", function(req, res) {
    db.Drinks.find({})
    .then((allDrinks) => {
        console.log(allDrinks);
        res.json({
            message: "Requested all Drinks",
            error: false,
            data: allDrinks
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
});

// app.post("/api/new", function(req, res) {
//     db.Tesla.create(req.body)
//     .then((newTesla) => {
//         console.log("New tesla: ", newTesla);
//         res.json({
//             message: "Successfully created",
//             error: false,
//             data: newTesla
//         })
//     }).catch((err) => {
//         console.log(err);
//         res.json({
//             message: err.message,
//             error: true
//         })
//     })
// });

app.use(express.static(__dirname + '/client/build'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, function() {
    console.log(`App is running on http://localhost:${PORT}`);
});