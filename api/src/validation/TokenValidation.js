const jwt = require('jsonwebtoken');
const { userDB } = require('../db/DB');
require('dotenv').config();

module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Unauthorized user');

    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = new userDB();

        if (verified) {
            req.id = verified;
            user.validateID(verified)
                .then(r => {
                    
                
                    console.log(r);
                    if(!r){
                        return res.status(401).send('Unauthorized user');
                    }
                    next();
                })
                .catch(next);
        }
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};
