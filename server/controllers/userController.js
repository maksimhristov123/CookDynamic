const { User } = require('../models/User');

// Register
const register = async (req, res) => {
    const { username, email, password, repeatPassword, profileImageUrl } = req.body;

    try {

        const registrationProfile = { username, email, password, profileImageUrl };

        const user = await User.create({ ...registrationProfile });
        return res.status(201).json(user);
    } catch (error) {
        console.log(error);
    }


}

// Login
const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email, password: password });

    return res.status(201).json(user);
}

module.exports = {
    register,
    login
}