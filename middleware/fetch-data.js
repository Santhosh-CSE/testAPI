const jwt_decode = require("jwt-decode");

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQHRlc3QuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkN1daelNBd043Q3JrMkw1S3piaXJMLmJJbVpaUmhxRm9vaUEwUkZmUWs3TmpCMm1Sc3VBZ0siLCJ1c2Vyc0lkIjoiNjMxMDk2OTA0NzcxZjQ2ZmU5YzZlN2YxIiwiaWF0IjoxNjYyNTUwNjA2LCJleHAiOjE2NjI1NTQyMDZ9.ftJoRtPgl1nU_VCDmsdkt8-Xd4uK0Rvc_vk5KE76M6s";
var decoded = jwt_decode(token);
const JWT_email = decoded.email;
const JWT_usersId = decoded.usersId;
console.log(JWT_email);
console.log(JWT_usersId);

module.exports.email = JWT_email;
module.exports.usersId = JWT_usersId;