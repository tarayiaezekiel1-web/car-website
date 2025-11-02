import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  description: String,
  category: {
    type: String,
    enum: ["newarrivals", "secondhand", "top-sale", "recommended"],
    default: "newarrivals",
  },
  year: Number,
  fuelType: {
    type: String,
    enum: ["Petrol", "Diesel", "Hybrid", "Electric"],
  },
  transmission: {
    type: String,
    enum: ["Automatic", "Manual"],
  },
  location: String,
  image: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Car= mongoose.model("Car",carSchema)

export default Car