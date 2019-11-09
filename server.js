const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors');
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());

const users = require("./routes/api/users");
const port = process.env.PORT || 3001;

const models = require("./models")
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());



// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);


app.get("/bartender/orders", function(req, res) {
  db.Order.find({})
    .then(allOrders => {
      res.json({
        message: "Requested all Orders",
        error: false,
        data: allOrders
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

app.post("/order-summary", function(req, res) {
  db.Order.create(req.body)
    .then(newOrder => {
      console.log("New Order: ", newOrder);
      res.json({
        message: "Successfully created",
        error: false,
        data: newOrder
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


app.listen(port, () => console.log(`Server up and running on port ${port} !`));
