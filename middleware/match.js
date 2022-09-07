const jwt_decode = require("jwt-decode");
const Userfetch = require('../models/User');
const Postfetch = require('../models/Post');


const matchUser = async (req, res, next) => {
    //console.log("matchUser", req.params);
    const matchUser1 = await Postfetch.findOne({
        uuid: req.params.uuid
    })
    console.log("matchUser1", matchUser1);
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt_decode(token);
    const JWT_email = decoded.email;
    const JWT_usersId = decoded.usersId;
    console.log("JWT_email", JWT_email);
    console.log("JWT_usersId", JWT_usersId);
    
        if(JWT_email === matchUser1.emailPost) {
        next();
            console.log(Userfetch.email);
            console.log(Postfetch.emailPost);
            console.log("Success");
        }
    else { 
        //console.log("error", error);
        return res.status(403).json({
            message: 'Incorrect'
        })
    }}


module.exports = matchUser;
