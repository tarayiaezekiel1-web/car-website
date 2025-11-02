import mongoose from "mongoose"

const userschema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,

  },
  image:{
    type:String,
    default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  }
},{timestamps:true})

const User= mongoose.model("User",userschema)

export default User