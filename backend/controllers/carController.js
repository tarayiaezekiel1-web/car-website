import Car from "../models/car.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

// ✅ Get all cars (optionally filter by category)

// ✅ Get all cars (with advanced filters)

// controllers/carController.js


export const getCars = async (req, res) => {
  try {
    const {
      category,
      model,
      minPrice,
      maxPrice,
      year,
      fuelType,
      transmission,
      location,
    } = req.query;

    const filter = {};

    if (category) filter.category = category;
    if (model) filter.model = { $regex: model, $options: "i" }; // partial match
    if (fuelType) filter.fuelType = fuelType;
    if (transmission) filter.transmission = transmission;
    if (location) filter.location = location;
    if (year) filter.year = parseInt(year);
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseInt(minPrice);
      if (maxPrice) filter.price.$lte = parseInt(maxPrice);
    }

    const cars = await Car.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, cars });
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};



// ✅ Get one car by ID
export const getOneCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ success: false, message: "Car not found" });
    res.status(200).json({ success: true, car });
  } catch (error) {
    console.error("Error fetching car:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Add a new car
export const postCar = async (req, res) => {
  try {
    const { name, brand, price, description, category } = req.body;

    if (!name || !brand || !price || !description) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Please upload an image" });
    }

    // Upload file to Cloudinary
    const uploadRes = await cloudinary.uploader.upload(req.file.path, { folder: "cars" });

    // Remove temp file
    fs.unlinkSync(req.file.path);

    const newCar = await Car.create({
      name,
      brand,
      price,
      description,
      category: category || "newarrivals",
      image: uploadRes.secure_url,
    });

    res.status(201).json({ success: true, car: newCar });
  } catch (error) {
    console.error("Error uploading car:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Delete a car
export const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) return res.status(404).json({ success: false, message: "Car not found" });
    res.status(200).json({ success: true, message: "Car deleted successfully" });
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
