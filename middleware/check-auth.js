const jwt = require('jsonwebtoken');
const User = require('../models/User');

const checkAuth = (req, res, next) => {
    try{
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    next();
    } catch (error){
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
}

/*const checkUser = (req, res, next) => {
    if(req.User == null){
        res.status(403);
        return res.send('You need to Sign-In');
    } 
}*/

// Check User
/* const checkUser = (req, res, next) => {
    console.log( "Hello",req);
    const token = req.cookies.JWT_KEY;
    
    try{
        //const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify (token, process.env.JWT_KEY);
        req.userData = decoded;
        console.log(decoded);
        let user = User.findById(decoded.id);
        res.locals.user = user;
        next();
        } catch (error){
            return res.status(401).json({
                message: 'Auth failed'
            });
            res.locals.user = null;
        }
} */

module.exports = { 
    checkAuth 
    //checkUser
};