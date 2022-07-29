const router = require('express').Router();

const recipeService = require('../services/recipeServices');

router.post('/', (req,res)=> {
    recipeService.create({recipeTitle, recipeDescription,  recipeCategories, recipeTime, recipeImage})
})

module.exports = router;