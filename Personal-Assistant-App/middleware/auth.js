const JWT = require('jsonwebtoken');

// status code 401 means unauthorazid

const auth = (req,res,next)=>{
    try{
        // cheking x-auth token with our JWT token 
        const token = req.header("x-auth-token")
        if(!token){
            return res.status(401).json({msg:'no authuntcation token , authorazation denied'})

        }
        // gropping out jwt token , passing  JWT-secrit and chiking it cordinates with our user we have selected
        const verified = JWT.verify(token,'SHHH');
        if(!verified){
            res.status(401).json({ msg: "Login success" })
        }
        req.user = verified.id;
        next();
    }catch(err){
        res.status(500).json({err:err})
    }
}

module.exports = auth