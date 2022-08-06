const {User} = require('../models/User');


// Register
const register = async(req, res) => {
    const {username , email, password, repeatPassword , profileImageUrl } = req.body;
    const registrationProfile = {username , email, password , profileImageUrl };

    const registeredUser = await User.create({...registrationProfile});
    return res.status(201).json(registeredUser);
}

// Login
const login = async(req, res) => {
    const {email, password} = req.body;
    const loginProfile = {email, password }

    const logedUser = await User.find({...loginProfile})
    return res.status(201).json(logedUser);
}

//Logout


module.exports = {
    register,
    login
}