var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
var ingredientSchema = new Schema({
  name: String,
  measure: String
});
var DrinkSchema = new Schema({
  drinkId: {
    type: String,
    required: true
  },
  drinkThumb: {
    type: String,
    required: true
  },
  drinkName: {
    type: String,
    required: true
  },
  // ingredient1: {
  //   type: String,
  //   required: true
  // },
  // ingredient2: {
  //   type: String,
  //   required: true
  // },
  // ingredient3: {
  //   type: String,
  //   required: false
  // },
  // ingredient4: {
  //   type: String,
  //   required: false
  // },
  // ingredient5: {
  //   type: String,
  //   required: false
  // },
  ingredients: [ingredientSchema],

  // ingredient1Measure: {
  //   type: String,
  //   required: true,
  // },
  // ingredient2Measure: {
  //   type: String,
  //   required: true,
  // },
  // ingredient3Measure: {
  //   type: String,
  //   required: false,
  // },
  // ingredient4Measure: {
  //   type: String,
  //   required: false,
  // },
  // ingredient5Measure: {
  //   type: String,
  //   required: false,
  // },
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
