const Recipe = require('../models/recipe');

exports.create = recipeData => Recipe.create(recipeData);