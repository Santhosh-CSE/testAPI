//const jwt_decode = require("jwt-decode");
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

/* var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQHRlc3QuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkN1daelNBd043Q3JrMkw1S3piaXJMLmJJbVpaUmhxRm9vaUEwUkZmUWs3TmpCMm1Sc3VBZ0siLCJ1c2Vyc0lkIjoiNjMxMDk2OTA0NzcxZjQ2ZmU5YzZlN2YxIiwiaWF0IjoxNjYyNTQwMTI3LCJleHAiOjE2NjI1NDM3Mjd9.LIdcVHYZkWDYGeTUdTWH7YRUBImcAs_Q8Z779zLmsrg";
var decoded = jwt_decode(token);
const JWT_email = decoded.email;
const JWT_usersId = decoded.usersId;
console.log(JWT_email);
console.log(JWT_usersId); */


/*const checkUser = (req, res, next) => {
    //const token = req.cookies.jwt;
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      jwt.verify(token, async (err, decoded) => {
        if (err) {
          res.locals.user = null;
          next();
        } else {
          let user = await User.findById(decoded.id);
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  }; */

/*const checkUser = (req, res, next) => {
    if(req.User == null){
        res.status(403);
        return res.send('You need to Sign-In');
    } 
}*/

/*// Check User
const checkUser = (req, res, next) => {
    //console.log( "Hello",req);
    const token = req.cookies.jwt;
    
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
}*/

module.exports = checkAuth;
    //checkUser
//module.exports.email = JWT_email;
//module.exports.usersId = JWT_usersId;
