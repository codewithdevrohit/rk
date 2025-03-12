const jwt = require("jsonwebtoken")
const auth = async (req,res,next)=>{
    try {
       const token = req.header("auth-token") 
       const validToken = await jwt.verify(token,process.env.SEC)
       if(!validToken) return res.status(500).json({errors:true,message:"token is invalid"})
        next()
    } catch (error) {
      return res.status(500).json({errors:true,message:error.message})  
    }
}

module.exports = auth