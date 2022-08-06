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

    await User.findOne({email:email})
        .then(user => {
            if(user.password === password){
                
                return res.status(201).json(user);
            }else{
                return res.json({
                    message: 'Invalid user or password!'
                })
            }
        })
        .catch(error => {
            console.log("Faild to fetch: " + error)
        });
    
    
}

//Logout


module.exports = {
    register,
    login
}