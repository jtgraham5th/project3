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
  ingredients: [ingredientSchema],
  glass: {
    type: String,
    required: false
  },
  instructions: {
    type: String,
    required: true
  }
},
{
 collection: 'Drink'
});

// Export the model
module.exports = mongoose.model("Drink", DrinkSchema);

