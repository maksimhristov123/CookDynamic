const mongoose = require('mongoose');


const RecipeSchema = new mongoose.Schema({
    recipeTitle: {
        type: String,
        required:true,
    },
    recipeDescription: {
        type: String,
        required:true,
    },
    recipeCategories: {
        type:String,
        required:true
    },
    recipeTime:{
        type: String,
        required: true
    },
    recipeImage: {
        type: String,
        required: true
    },
    recipeAuthor: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})


const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = {
    Recipe,
}