const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('./config/environment');
mongoose.connect(dbURI);

const Cocktail = require('../models/cocktail');

Cocktail.collection.drop();

Cocktail
  .create([{
    name: 'Old Fashioned',
    alcoholBase: 'whiskey',
    image: 'https://images.unsplash.com/photo-1498956405005-42073c453e8a?auto=format&fit=crop&w=1051&q=80',
    ingredients: 'fine sugar, Angostura bitters, whiskey, orange peel',
    recipe: 'Place sugar in an Old Fashioned glass. Douse with bitters and add a few drops of water. Add whiskey and stir until sugar is dissolved. Add several large ice cubes and stir rapidly with a bar spoon to chill. Garnish with a piece of orange peel about the size of your thumb'
  },{
    name: 'Mojito Cubano',
    alcoholBase: 'rum',
    image: 'https://images.unsplash.com/photo-1509448613959-44d527dd5d86?auto=format&fit=crop&w=1020&q=80',
    ingredients: 'mint leaves, lime, brown sugar, ice, rum, soda' ,
    recipe: 'Cut the lime into 1 half and 2 quarters. Squeeze 3/4 of the lime into a Collins glass. Add 10 whole mint leaves (no stem), 2 teaspoons of sugar. Muddle the ingredients gently. Add 50ml of white Rum, ice and mix together until sugar is disolved. Top up glass with soda water. Rub the rim of the glass with the last 1/4 of the lime and then drop it in. Rub the rim of the glass with more mint leaves. Add a sprig of mint for decoration!'
  },{
    name: 'Vesper Martini',
    alcoholBase: 'vodka gin',
    image: 'https://images.food52.com/rrT8cfnVCGSdPTXdj4vznxAK9Hw=/753x502/ab4a0c63-62ff-481c-9dd5-5044d9e9a08b--vesper-cocktail_food52_mark_weinberg_14-11-18_0063.jpg',
    ingredients: 'Lillet Blanc, vodka,gin,ice,strip lemon peel',
    recipe: 'In a cocktail shaker, combine Lillet Blanc, vodka, and gin. Add ice and shake vigorously until well chilled, about 30 seconds. Strain into chilled martini or coupe glass. Squeeze lemon peel over glass, making sure oils fall into glass, then brush peel along outer lip of glass, drop peel in drink, and serve.'
  },{
    name: 'White Russian',
    alcoholBase: 'vodka',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1050&q=80',
    ingredients: 'vodka, kahlua, half-and-half, crushed ice, nutmeg',
    recipe: 'The only cocktail that gets better with dilution. Fill a rocks glass with ice. Add 1 part Kahlua, 1 part vodka, 1 part half-and-half. Grate fresh nutmeg on top. Serve with a straw and stir it up... little darling, stir it up. Replace half-and-half with heavy cream, milk or skim milk. Dilution is perfection. Abide.'
  }])
  .then((cocktails) => {
    console.log(`${cocktails.length} cocktails created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
