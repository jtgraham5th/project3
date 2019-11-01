const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true}
})

const Bars = mongoose.model("Bar", barSchema);

module.exports = Bars;