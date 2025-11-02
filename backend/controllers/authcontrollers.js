/*

import bcrypt from "bcryptjs"
import User from "../models/user.js"
import generateTokenAndSetCookie from "../utils/generatetoken"
export default signUp= async (req,res)=>{
	try {
		const {username ,password}= req.body

		if(!username || !password ){
			return res.status(400).json({
				message:"all the fields are required"
			})

		}

		const harshedpassword= await bcrypt.hash(password,10)

		const user= await User.create({
			username,
			password:harshedpassword
		})
		// or const user= new User({})
		generateTokenAndSetCookie(user._id,res)

		await user.save()

		res.status(201).json({
			message:"success signUp",
			username: user.username,
			password: user.password
		})
	} catch (error) {
		console.error("faile",error)
		res.status(500).json({
			message:"server error"
		})
		
	}
}
export const logout = async (req, res) => {
	res.clearCookie("jwt");
	res.status(200).json({ success: true, message: "Logged out successfully" });
};
*/
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import generateTokenAndSetCookie from "../utils/generatetoken.js";

export const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if fields are missing
    if (!username || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({
        message: "Username already taken",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      username,
      password: hashedPassword,
    });

    // Generate JWT token and set cookie
    generateTokenAndSetCookie(user._id, res);

    // Send success response
    res.status(201).json({
      message: "Signup successful",
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Signup failed: ", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};
export const login = async(req,res)=>{
	try {
		const {username, password}= req.body

		if(!username||!password){
			return res.status(400).json({
				message:"all the field are required"
			})
		}
		const user= await User.findOne({username})
		if(!user){
			return res.status(401).json({
				message:"no user found"
			})
		}
		const correctPassword= await bcrypt.compare(password,user.password || "")

		if(!correctPassword){
			return res.status(400).json({
				message:"incorrect password"
			})
		}
		generateTokenAndSetCookie(user._id,res)
		res.status(200).json({
			message:"login successfull",
			user:{
				id: user._id,
				username: user.username,
				image:user.image
			}
		})
	} catch (error) {
		res.status(500).json({
			message:"server error"
		})
		
	}
}