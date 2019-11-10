const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoute = require('./api/users');
const drinksRoute = require('./api/drinks');

// const path =
const PORT = process.env.PORT || 3001;

// DB Config
const models = require("./config/keys").MONGODB_URI
const db = require("./config/keys").mongoURI;

// Bodyparser middleware
mongoose.Promise = global.Promise;
// Connect to MongoDB

mongoose
  .connect(process.env.MONGODB_URI ||
    db, models,
    { useNewUrlParser: true }
  )
  .then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}

  );
// // Passport middleware
// app.use(passport.initialize());

// // Passport config
// require("./config/passport")(passport);

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoute);
app.use("/api/drinks", drinksRoute);

app.use(express.static(__dirname + "/client/build"));


app.listen(PORT, function() {
  console.log(`App is running on http://localhost:${PORT}`);
});
