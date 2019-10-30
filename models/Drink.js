var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
var ingredientSchema = new Schema({
  name: String,
  measure: String
});
var DrinkSchema = new Schema({

  model: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  ingredients: [ingredientSchema],
  glass: {
    type: String,
    required: false
  },
  instructions: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
const Drink = mongoose.model("Drink", DrinkSchema);

// Export the Article model
module.exports = Drink;
