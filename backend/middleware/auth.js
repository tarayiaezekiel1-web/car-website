/*

import jwt from "jsonwebtoken"
//library to sign and verify jwt tokens

import User from "../models/user.js"


export const protectRoute= async(req,res,next)=>{

    try{
    //this function will run before the protectRoute
    // ifthe user is authorized it calls next()and lets them through
    //if not it stops and returns an error


    const token =req.cookies.jwt

    //it reads the token stored in cookies unde the jwt
    //this  assumes that you set the cookie during login/signup 

    if(!token){
        return res.status(401).json({
            message:"not authorized"
        })
    }
    //if there is no token the user is not logged in , deny access

    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    */
    /*
    verifies the token using your secrete key
    if valid it returns the payloadeg {id:"userId"}
    if invalid or expired it throws an error*/ 

    /*
    
    if(!decoded){
        
        return res.status(401).json({
            message:"not authorized"
        })
    }
    const currentUser= await User.findById(decoded.id)

    // finds the user in the database using the id from the token
    // this ensures that the user still exists
    req.user= currentUser
    //attaches the found user to the req Object
    //now in your routes you can access req.user to know who is making the request
    next()
    //passes the control to the next middleware
    } catch (error) {
  console.log("Error in auth middleware: ", error);

  if (error instanceof jwt.JsonWebTokenError) {
    return res.status(401).json({
      success: false,
      message: "Not authorized - Invalid token",
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
  //If it’s a JWT error (invalid/expired), return 401 Unauthorized.

//Otherwise, return 500 Server Error
}

}
export default protectRoute\

*/
// middleware/authMiddleware.js


import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

        if (!token) {
            return res.status(401).json({ success: false, message: "Not authorized" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user to request (exclude password)
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        next();
    } catch (error) {
        console.error("Auth error:", error);
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default protectRoute;

/*
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const protectRoute = async (req, res, next) => {
    try {
        let token;

        // 1. Check for token in cookies
        if (req.cookies && req.cookies.jwt) {
            token = req.cookies.jwt;
        }

        // 2. Fallback: check Authorization header
        else if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({ success: false, message: "Not authorized, no token" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user to request (exclude password)
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        next();
    } catch (error) {
        console.error("Auth error:", error);
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default protectRoute;
*/
