const { User } = require('../models/User');

const jwt = require('jsonwebtoken');

const COOKIE_NAME = 'users';
const SECRET_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

// Register
const register = async (req, res) => {
    const { username, email, password, repeatPassword, profileImageUrl } = req.body;
    const registrationProfile = { username, email, password, profileImageUrl };

    await User.create({ ...registrationProfile })
        .then(user => {
            const token = createToken(user);
            res.cookie('user', token, { httpOnly: true });

            return res.status(201).json(user);
        })
        .catch(error => {
            console.log("Feild oto register: " + error);
        });


}

// Login
const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email, password: password })
    console.log(user);
    
    const userToken = await createToken(user);
    console.log(userToken);

    res.cookie(COOKIE_NAME, userToken, { httpOnly: true });

    // return res.status(201).json(user);
}

//Logout


// Create Token
const createToken = (user) => {

    const payload = { _id: user._id, username: user.username, email: user.email }
    const options = { expiresIn: '2d' };

    const tokenPromise = new Promise((resolve, reject) => {

        jwt.sign(payload, SECRET_TOKEN, options, (err, decodetToken) => {
            if (err) {
                return reject(err);
            }

            resolve(decodetToken)
        })

    })

    return tokenPromise;
}

module.exports = {
    register,
    login
}