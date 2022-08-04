const recipeRouter = require('./recipes.js');
const userRouter = require('./users.js')

module.exports = (app) => {
    app.use('/api/recipes', recipeRouter);
    app.use('/api/users', userRouter);
}