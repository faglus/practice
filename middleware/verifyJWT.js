// const jwt = require('jsonwebtoken');
// require('dotenv').config();


// function validateJWT(req, res, next){
//     const token = req.header('Authorization').replace('Bearer', '').trim();

//     if(!token){
//         return res.status(401).json({message : 'Authorization token is missing'});
//     }

//     jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded)=>{
//         if(err){
//             return res.status(402).json({message: 'Invalid token'});
//         }

//         req.user = decoded;
//         next();
//     });
// }

// module.exports = {validateJWT};

