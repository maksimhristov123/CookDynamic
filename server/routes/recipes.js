const router = require('express').Router();
const recipeController = require('../controllers/recipeController');

router.get('', recipeController.recipesGetAll);
router.post('', recipeController.recipeCreate);

module.exports = router;