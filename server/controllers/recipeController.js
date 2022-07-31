const {Recipe} = require('../models/Recipe');

//Get All Recipes from DB

const recipesGetAll =  async (req, res) => {
    const allRecipes = await Recipe.find();
    return res.status(200).json(allRecipes);
}


// Create Recipes
const recipeCreate = async (req, res) => {

    const { recipeTitle, recipeDescription, recipeCategories, recipeTime, recipeImage } = req.body;
    const insertedData = { recipeTitle, recipeDescription, recipeCategories, recipeTime, recipeImage };

    const insertedRecipe = await Recipe.create({...insertedData});
    return res.status(201).json(insertedRecipe);

}

module.exports = {
    recipesGetAll,
    recipeCreate
}