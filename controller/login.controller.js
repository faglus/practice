const {findUserByEmail} =  require('../business/user.business');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { session } = require('passport');
require('dotenv').config();


const verifyPassword = (userInputPassword, hashedPassword) =>{
    const convertedInputPassword = md5(userInputPassword);
    return convertedInputPassword == hashedPassword;
}

const verifyLoginController = async(req,res)=>{
    const {email, password}= req.body;

    const userInfo = await findUserByEmail(email);
    if(!verifyPassword(password, userInfo.password)){
    return res.status(401).json({message: 'Authentication failed'});

}
 req.session.user ={email,id:userInfo.id};

const token = jwt.sign({email}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'});
res.json({message: 'Authentical successful', token,session:req.session.user});


}

module.exports={
    verifyLoginController
}