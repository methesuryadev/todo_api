const jwt = require('jsonwebtoken');
const constants=require("../helpers/constants.js")
const secretKey=constants.JWT_SECRET_KEY

function jwtLogin(req,res,next) {
    const user={
        id:1,
        username:"anil",
        email:"abcgmail.com"
    }
    jwt.sign({user},secretKey,{ expiresIn: '300s'},(err,token)=>{
        if(token){
            res.status(200).json({
                "error":false,
                message: "Token Created",
                "token":token
            })
        }else{
            res.status(400).json({
                "error":true,
                message: "Something is  Wrong",
                "err":err
            })
        }
       
    })
}

module.exports={
    jwtLogin
}