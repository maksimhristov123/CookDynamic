const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLenght: [3, 'Name must contains minimum of 3 chars!']
        },
        email: {
            type: String,
            required: true,
            match: [/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/, 'Email is not valid!'],
        },
        imageUrl: {
            type: String,
            required: true,
        },
        recipesOwnedId: {
            type: [{
                type: mongoose.Types.ObjectId,
                ref: 'Recipe'
            }],
        },
        recipesBuyId: {
            type: [{
                type: mongoose.Types.ObjectId,
                ref: 'Recipe'
            }],
        }
    }
)

const User = mongoose.model('User', userSchema);
module.exports = User;