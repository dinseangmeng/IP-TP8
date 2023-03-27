const jwt = require('jsonwebtoken');
const { userDB } = require('../db/DB');
require('dotenv').config();

module.exports = function (req, res, next) {
    let token = req.header('Authorization');
    if(token) token=token.split(" ")[1]
    
    if (!token) {        
        return res.json({
            msg:'Invalid Token',
            isHas:false
        });
    }
    // console.log(token);
    
    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = new userDB();
        
        if (verified) {
            req.id = verified;
            user.validateID(verified)
            .then(r => {
                
             
                if(!r){
                    return res.json({
                        msg:'Unauthorized user',
                        isHas:false
                    });
                }
                next();
            })
            .catch(next);
        }
    } catch (err) {
        return res.json({
            msg:'Invalid Token',
            isHas:false
        });
    }
};
