const {User} = require('../models/User');


// Register
const register = async(req, res) => {
    const {username , email, password, repeatPassword , profileImageUrl } = req.body;
    const registrationProfile = {username , email, password , profileImageUrl };

    const registeredUser = await User.create({...registrationProfile});
    return res.status(201).json(registeredUser);
}
// Login

//Logout


module.exports = {
    register
}