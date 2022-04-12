function auth(req, res, next){
    let isVerified = true;
    if (isVerified){
        console.log("logged in successfully")
        next()
    }
    else{
        console.log("not authorised")
        throw Error;
    }
    }
    
    module.exports=auth