const {Recipe} = require('../models/Recipe');

//Get All Recipes from DB

const recipesGetAll =  async (req, res) => {
    const allRecipes = await Recipe.find();
    return res.status(200).json(allRecipes);
}

const recipesGetOne =  async (req, res) => {
    const recipesId = req.params.recipeId;

    const searchedRecipe = await Recipe.find({_id:recipesId});
    return res.status(200).json(searchedRecipe);
}


// Create Recipes
const recipeCreate = async (req, res) => {

    const { recipeTitle, recipeDescription, recipeCategories, recipeTime, recipeImage } = req.body;
    const insertedData = { recipeTitle, recipeDescription, recipeCategories, recipeTime, recipeImage };

    const insertedRecipe = await Recipe.create({...insertedData});
    return res.status(201).json(insertedRecipe);
}


// Delete Recipe
const recipeDelete = async (req, res) => {
    const reciperId = req.params.recipeId;
    await Recipe.deleteOne({_id:reciperId});
    return reciperId;
}

// Edit Recipe
const recipeEdit = async (req, res) => {
    const { recipeTitle, recipeDescription, recipeCategories, recipeTime, recipeImage } = req.body;
    const insertedData = { recipeTitle, recipeDescription, recipeCategories, recipeTime, recipeImage };

    const recipeId = req.params.recipeId;
    await Recipe.updateOne({_id:recipeId}, {$set:insertedData})
}

module.exports = {
    recipesGetAll,
    recipesGetOne,
    recipeCreate,
    recipeDelete,
    recipeEdit
}