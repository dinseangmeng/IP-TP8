const validator=(user)=>{
    let errMsg={}
    let isErr=false;
    if(!user.email) {
        errMsg.email ="Email required" ; 
        isErr=true;
    }
    if(!user.username) {
        errMsg.username ="Username required" ; 
        isErr=true;
    }
    if(!user.firstname) {
        errMsg.firstname ="firstname required" ; 
        isErr=true;
    }
    if(!user.lastname) {
        errMsg.lastname ="lastname required" ;
        isErr=true;
    }
    if(!user.password) {
        errMsg.password ="password required" ;
        isErr=true;
    }
    return {isErr,errMsg}
}
module.exports = validator