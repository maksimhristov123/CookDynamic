const { User } = require('../models/User');

// Register
const register = async (req, res) => {
    const { username, email, password, repeatPassword, profileImageUrl } = req.body;
    const registrationProfile = { username, email, password, profileImageUrl };

    const user = await User.create({ ...registrationProfile })
    return res.status(201).json(user);
}

// Login
const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email, password: password });

    return res.status(201).json(user);
}

//Logout
const logout = (req, res) => {
    return res;
}

module.exports = {
    register,
    login,
    logout
}