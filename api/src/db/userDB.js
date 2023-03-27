const fs =require('fs')
const bcrypt =require('bcrypt')
var uniqid = require('uniqid'); 
var jwt =require('jsonwebtoken')
require("dotenv").config();
class userDB{
    constructor(){
        this.SavePath='./src/db/jsonFile/user.json'
    }


    read(){
        return new Promise((resolve,reject)=>{
            fs.readFile(this.SavePath, 'utf8' , (err, data) => {
                if (err) {
                  reject(err)
                }
                
                resolve(JSON.parse(data))
                
              })
        })
    }
    
    async register(data){
        const users=await this.read()
        let errMsg="";

        users.every(item=>{
            if(data.email==item.email || data.username==item.username){
                errMsg="Username or Email already exist"
            }else{
                return true
            }
            
        })
        if(errMsg!="") return {msg:errMsg}
        try{
            const salt= await bcrypt.genSalt();
            const hasPassword= await bcrypt.hash(data.password,salt);
            data.password=hasPassword
        }catch(err){
            return {msg: err}
        }
        data.id=uniqid()
        fs.writeFile(this.SavePath, JSON.stringify([...users,data]), err => {
            if (err) {
              errMsg=(err)
              return
            }
            errMsg=""
            
          })
          if(errMsg!="")return {msg:errMsg}
          delete data.password
          let token=this.generateGToken(data.id)
          return {
            token:token,
            user:data,
            msg:"Login successfull"
          }

    }
    async login(data){
        const users=await this.read()
        let errMsg="";
        let isFine=false
        let user =users.filter(item=>{
            if(data.EUID==item.email || data.EUID==item.username){
                errMsg=""
                isFine=true
                return item
            }else{
                if(!isFine) errMsg="Incorrect Username or Password" 
                
            }
        })
        if(errMsg!="") return {msg:errMsg}
        user=user[0]
        try{

            const isIdenticallPass=await bcrypt.compare(data.password, user.password)
            if(isIdenticallPass){

                delete user.password
                // console.log(user);
                const token=this.generateGToken(user.id)
                return {
                    token:token,
                    user:user,
                    msg:"Login successfull"
                }
            }else{
                return {msg:"Incorrect user password"}
            }
        }catch(err){
            return {msg:err}
        }
        


    

        // return {msg:"Successfull"}
    }
    async validateID(id){
        const users=await this.read()
        // console.log(id);
        for(let i=0;i<users.length;i++){
            // console.log(users[i].email);
            if(users[i].id==String(id)){
                // console.log(id);
                return true
            }
        }
        return false

    }

    async getMe(id){
        const users=await this.read()
        let errMsg="";
        let user =users.filter(item=>{
            if(item.id==id){
                errMsg=""
                return item
            }else{
                errMsg="Item not found"
                
            }
        })
        if(errMsg!="") return {msg:"User not found",isHas:false}
        user=user[0]
        delete user.password
        return {
            user,
            isHas:true
        }
    }

    
    generateGToken(obj){
        return jwt.sign(obj,process.env.ACCESS_TOKEN_SECRET)
    }
}

module.exports =userDB;