var express = require('express');
var router = express.Router();
var validator = require('../validation/user_register_validation')
var login_validation = require('../validation/user_login_validation')
var  {userDB} = require('../db/DB')
var TokenValidation = require('../validation/TokenValidation')

router.post('/test',(req,res)=>{
    const user=new userDB()
    res.json(user.generateGToken(req.body.data))
})

router.get('/me',TokenValidation,(req,res)=>{
    // console.log(req.id);
    const users=new userDB()
    users.getMe(req.id).then(r=>{
        res.send(r)

    })
})

router.post('/login',(req,res)=>{
    const validation=login_validation(req.body)
    if(validation.isErr) res.send(validation.errMsg)
    const users=new userDB()
    users.login(req.body).then(r=>{

        res.send(r)
    }).catch(err=>{

            res.send()

    })

})

router.post('/register',(req,res)=>{
    const validation =validator(req.body)
    if(validation.isErr) res.send(validation.errMsg)
    else {
        const users=new userDB()
        users.register(req.body).then(r=>{
            res.json(r)
        }).catch(err=>{
            res.json(err)
        })
    }

})

module.exports =router;