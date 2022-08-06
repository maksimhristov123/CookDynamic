const router = require('express').Router();
const userController = require('../controllers/userController');
const {isAuth, isGuest} = require('../middlewares/userMiddleware');


router.post('/register',isGuest, userController.register);
router.post('/login',isGuest, userController.login);

module.exports = router;

