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

// const users = require("./routes/api/users");
// const path = 
const PORT = process.env.PORT || 3001;

const models = require("./models")
// const db = require("./config/keys").mongoURI;

const app = express();
// const server = require("http").Server(app)
// const io = require("socket.io")(server)

// server.listen(PORT, () => 
//   console.log(`Web Socket: Listening on port ${PORT }`));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// mongoose
//   .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
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
// app.use("/api/users", users);


// connection.on("connected", () => {
//   console.log("Mongoose connected successfully");
// });
// connection.on("error", err => {
//   console.log("Mongoose default connection error: " + err);
// });

// io.on("connection", socket => {
//   socket.emit('news', { hello: 'world'});
//   console.log("New client connected"), setInterval(
//     () => getApiAndEmit(socket),
//     10000
//   );
//   socket.on("disconnect", () => console.log("Client disconnected"));
// });

app.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

app.get("/bartender/orders", function(req, res) {
  models.Order.find({})
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

app.put("/bartender/orders/:id", function(req, res) {
  models.Order.findByIdAndUpdate(req.params.id, req.body)
    .then(singleOrder => {
      res.json({
        message: `Updated order #${singleOrder._id}`,
        error: false,
        data: singleOrder
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
  models.Drink.find({})
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
app.get("/order-summary/:id", function(req, res) {
  models.Order.findById(req.params.id, req.body)
  .then(singleOrder => {
    res.json({
      message: `Retrieved user order #${singleOrder._id}`,
      error: false,
      data: singleOrder
    });
  })
  .catch(err => {
    console.log(err);
    res.json({
      message: err.message,
      error: true
    });
  });
})
app.post("/order-summary", function(req, res) {
  models.Order.create(req.body)
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
  models.Drink.deleteOne({ _id: req.params.id })
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
  models.Drink.create(req.body)
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

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`Server up and running on port http://localhost:${PORT}`);
});


