const recipeRouter = require('./recipes.js');

module.exports = (app) => {
    app.use('/api/recipes', recipeRouter);
}