const validator=(user)=>{
    let errMsg={}
    let isErr=false;
    if(!user.EUID) {
        errMsg.email ="Email or Username required" ; 
        isErr=true;
    }
   
    if(!user.password) {
        errMsg.password ="password required" ;
        isErr=true;
    }
    return {isErr,errMsg}
}
module.exports = validator