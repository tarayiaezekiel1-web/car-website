import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CarFilterSidebar = ({ onApplyFilters }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    category: "",
    model: "",
    minPrice: "",
    maxPrice: "",
    year: "",
    fuelType: "",
    transmission: "",
    location: "",
  });

  const categories = ["newarrivals", "secondhand", "top-sale", "recommended"];
  const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric"];
  const transmissions = ["Manual", "Automatic"];
  const locations = ["Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru"];

  // Load from URL on mount
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      model: params.model || "",
      minPrice: params.minPrice || "",
      maxPrice: params.maxPrice || "",
      year: params.year || "",
      fuelType: params.fuelType || "",
      transmission: params.transmission || "",
      location: params.location || "",
    });
  }, [searchParams]);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // ✅ Apply filters (trigger backend + update URL)
  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) params.append(key, filters[key]);
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);

    // ✅ Trigger parent fetch
    onApplyFilters(filters);
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="text-xl font-semibold text-black mb-4">Filter Cars</h3>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Category</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Model */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Model</label>
        <input
          type="text"
          name="model"
          placeholder="e.g. Toyota Corolla"
          value={filters.model}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Price Range (Ksh)
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            name="minPrice"
            placeholder="Min"
            value={filters.minPrice}
            onChange={handleChange}
            className="border p-2 w-1/2 rounded"
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={handleChange}
            className="border p-2 w-1/2 rounded"
          />
        </div>
      </div>

      {/* Year */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Year of Manufacture
        </label>
        <input
          type="number"
          name="year"
          placeholder="e.g. 2020"
          value={filters.year}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Fuel Type */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Fuel Type</label>
        <select
          name="fuelType"
          value={filters.fuelType}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="">All</option>
          {fuelTypes.map((fuel) => (
            <option key={fuel} value={fuel}>
              {fuel}
            </option>
          ))}
        </select>
      </div>

      {/* Transmission */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Transmission
        </label>
        <select
          name="transmission"
          value={filters.transmission}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="">All</option>
          {transmissions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Location</label>
        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={handleApplyFilters}
        className="bg-blue-600 text-white py-2 px-4 w-full rounded hover:bg-blue-700 transition-all"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default CarFilterSidebar;
