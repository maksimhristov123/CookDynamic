const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeTitle: {
        type: String,
        required: true,
        minLenght: [3, 'Recipe title must contains minimum of 3 charechters!']
    },
    recipeDescription: {
        type: String,
        required:true
    },
    recipeCategories: {
        type: String,
        required: true
    },
    recipeTime: {
        type: String,
        required:true
    },
    recipeImage: {
        type: String,
        required:true
    },
    recipeAuthor: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;