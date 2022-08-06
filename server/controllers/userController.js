const { User } = require('../models/User');

const jwt = require('jsonwebtoken');

const SECRET_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

// Register
const register = async (req, res) => {
    const { username, email, password, repeatPassword, profileImageUrl } = req.body;
    const registrationProfile = { username, email, password, profileImageUrl };

    await User.create({ ...registrationProfile })
        .then(user => {

            return res.status(201).json(user);
        })
        .catch(error => {
            console.log("Feild oto register: " + error);
        });


}

// Login
const login = async (req, res) => {
    const { email, password } = req.body;

    await User.findOne({ email: email, password: password })
        .then(user => {

            const token = jwt.sign({...user}, SECRET_TOKEN);

            console.log(token)
            res.cookie('user', token, { httpOnly: true });

            return res.status(201).json(user);

        })
        .catch(error => {
            console.log("Faild to login: " + error)
        });


}

//Logout



module.exports = {
    register,
    login
}