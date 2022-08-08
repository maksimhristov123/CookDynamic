const router = require('express').Router();
const userController = require('../controllers/userController');
const { isAuth, isGuest } = require('../middlewares/userMiddleware');


router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/logout', userController.logout);

module.exports = router;

