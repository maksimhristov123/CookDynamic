const router = require('express').Router();
const recipeController = require('../controllers/recipeController');

router.get('', recipeController.recipesGetAll);
router.post('', recipeController.recipeCreate);
router.get('/:recipeId', recipeController.recipesGetOne);

router.get('/:recipeId/delete', recipeController.recipeDelete);
router.post('/:recipeId/edit', recipeController.recipeEdit);


module.exports = router;