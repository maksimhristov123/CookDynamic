const jwt = require('jsonwebtoken');

exports.auth = (req,res,next) => {
    const token = req.cookies['user'];

    if(token){
        jwt.verify(token, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9', (err, decodedToken) => {
            if(err){
                res.clearCookie('user');
                return next(err);
            }

            req.user = decodedToken;
            res.locals.user = decodedToken;

            next();
        })
    }else{
        next();
    }
}

exports.isAuth = (req, res, next) => {
    if(!req.user){
        console.log('Please Login!!!');
        res.redirect('/')
    }

    next();
}

exports.isGuest = (req, res, next) => {
    if(req.user){
        console.log('You must be a guest!')
        res.redirect('/')
    }

    next();
}