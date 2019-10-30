require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");
// const users = require("./routes/api/users");

const PORT = process.env.PORT || 3001;

const db = require("./models")
// const db = require("./config/keys").mongoURI;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
// app.use("/api/users", users);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose connected successfully");
});
connection.on("error", err => {
  console.log("Mongoose default connection error: " + err);
});

app.get("/api/cars/:id", function(req, res) {
  db.Tesla.findById(req.params.id)
    .then(singleTesla => {
      res.json({
        message: "Requested all Teslas",
        error: false,
        data: singleTesla
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        message: err.message,
        error: true
      });
    });
});

app.get("/order-summary", function(req, res) {
  db.Drink.find({})
    .then(allDrinks => {
      console.log(allDrinks);
      res.json({
        message: "Requested all Drinks",
        error: false,
        data: allDrinks
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        message: err.message,
        error: true
      });
    });
});

app.delete("/order-summary/drink/:id", function(req, res) {
  db.Drink.deleteOne({ _id: req.params.id })
    .then(response => {
      // console.log(response);
      res.json({
        message: `Deleted drink with id: ${req.params.id}`,
        error: false,
        data: response
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        message: err.message,
        error: true
      });
    });
});
app.post("/api/new", function(req, res) {
  db.Drink.create(req.body)
    .then(newDrink => {
      console.log("New Drink: ", newDrink);
      res.json({
        message: "Successfully created",
        error: false,
        data: newDrink
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        message: err.message,
        error: true
      });
    });
});

app.use(express.static(__dirname + "/client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`App is running on http://localhost:${PORT}`);
});
