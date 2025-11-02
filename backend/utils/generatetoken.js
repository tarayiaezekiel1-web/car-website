import jwt from "jsonwebtoken"
//imports jsowetoken library so that we can use to create and verify JWT  tokens

const generateTokenAndSetCookie= (userId,res)=>{
    // defines a function 
    //userid the unique identifire of the logged-in user (we willl store it inside the token)
    const token= jwt.sign({id: userId},process.env.JWT_SECRET,{
        expiresIn:"7d"//expires in 7days
    })
//jwt.sign(payload,secret,options) create a jwt token
//process.env.JWT_SECRET the secrete key stored in env file

res.cookie("jwt",token,{
    //this sets a cookie in the http response so the browser will store it
    //cookie name is jet
    //the cookie value is the token we just generated
     httpOnly: true,   // prevents JavaScript access (XSS protection)
    secure: process.env.NODE_ENV === "production", // only send on HTTPS in production
    sameSite: "strict", // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days

})
return token // returns the token string
}
export default generateTokenAndSetCookie