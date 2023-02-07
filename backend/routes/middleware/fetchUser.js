const jwt=require('jsonwebtoken');
const fetchUser=(req,res,next)=>{
    //Get token from the jwt token and add Id to req object.
    const token=req.header("auth-token");
    if(!token){
        res.status(401).send({error:"Please authenticate with the valid token"});
    }
    try {
        const data=jwt.verify(token,"Hello Mf");
        req.user=data.user;
        next();
        
    } catch (error) {
        res.status(401).send({error:"Please authenticate with the valid token"});
        
    }
   

}

module.exports=fetchUser;