const mongoose = require('mongoose');

const cocktailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  alcoholBase: {type: String, required: true},
  image: { type: String },
  ingredients: { type: String },
  recipe: { type: String, required: true }
});

module.exports = mongoose.model('Cocktail', cocktailSchema);
