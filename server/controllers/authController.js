const router = require('express').Router();

const authService = require('../services/authServices');

router.post('/register', async (req, res) => {

    // Just check for the submited data is submit correct
    console.log(req.body);
    // res.end();

    // Validation of data from register form
    const { username, password, repeatPassword } = req.body;

    if (!password) {
        return res.render('auth/register', { error: 'Password is required!' });
    }

    if (password !== repeatPassword) {
        return res.render('auth/register', { error: 'Password not match' });
    }

    try {

        // Create user
        const createdUser = await authService.create({ username, password, address });
        const token = await authService.createToken(createdUser);

        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });
        res.redirect('/')

    } catch (error) {
        // add mongoose err mapper
        return res.render('auth/register', { error: getErrorMessage(error) });

    }
})

module.exports = router;