import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const PostCar = () => {
  const [formData, setFormData] = useState({
    name: "",
    model: "",
    brand: "",
    price: "",
    year: "",
    fuelType: "",
    transmission: "",
    location: "",
    description: "",
    category: "",
    image: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      model,
      brand,
      price,
      year,
      fuelType,
      transmission,
      location,
      description,
      category,
      image,
    } = formData;

    if (
      !name ||
      !model ||
      !brand ||
      !price ||
      !year ||
      !fuelType ||
      !transmission ||
      !location ||
      !description ||
      !category ||
      !image
    ) {
      toast.error("All fields are required!");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:5000/api/cars", data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("✅ Car posted successfully!");
      setFormData({
        name: "",
        model: "",
        brand: "",
        price: "",
        year: "",
        fuelType: "",
        transmission: "",
        location: "",
        description: "",
        category: "",
        image: null,
      });
    } catch (error) {
      console.error("Error posting car:", error);
      toast.error("Failed to post car.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Post a New Car</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Car Name" value={formData.name} onChange={handleChange} className="border p-2 rounded" />

        <input type="text" name="model" placeholder="Model (e.g., Corolla, Civic)" value={formData.model} onChange={handleChange} className="border p-2 rounded" />

        <input type="text" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} className="border p-2 rounded" />

        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="border p-2 rounded" />

        <input type="number" name="year" placeholder="Year of Manufacture" value={formData.year} onChange={handleChange} className="border p-2 rounded" />

        {/* Fuel Type */}
        <select name="fuelType" value={formData.fuelType} onChange={handleChange} className="border p-2 rounded">
          <option value="">Select Fuel Type</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="hybrid">Hybrid</option>
          <option value="electric">Electric</option>
        </select>

        {/* Transmission Type */}
        <select name="transmission" value={formData.transmission} onChange={handleChange} className="border p-2 rounded">
          <option value="">Select Transmission</option>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>

        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="border p-2 rounded" />

        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="border p-2 rounded" />

        {/* ✅ Category Dropdown */}
        <select name="category" value={formData.category} onChange={handleChange} className="border p-2 rounded">
          <option value="">Select Category</option>
          <option value="newarrivals">New Arrivals</option>
          <option value="secondhand">Second Hand</option>
          <option value="top-sale">Top Sale</option>
          <option value="recommended">Recommended</option>
        </select>

        <input type="file" accept="image/*" onChange={handleFileChange} className="border p-2 rounded" />

        <button
          type="submit"
          className={`bg-black text-white py-2 rounded ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-800"}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Posting..." : "Post Car"}
        </button>
      </form>
    </div>
  );
};

export default PostCar;
