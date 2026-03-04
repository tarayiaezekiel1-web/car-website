import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import ProductsGrid from "./ProductsGrid";
import { useCart } from "../context/cartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarCars, setSimilarCars] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchCarAndSimilar = async () => {
      setLoading(true);
      setCar(null);

      try {
        const API_BASE = import.meta.env.VITE_API_URL || "";

        // Fetch main car
        const carRes = await axios.get(`${API_BASE}/api/cars/${id}`, {
          withCredentials: true,
        });
        const fetchedCar = carRes.data.car || null;
        setCar(fetchedCar);

        // Fetch similar cars safely
        if (fetchedCar && fetchedCar.model) {
          const similarQuery = new URLSearchParams({ model: fetchedCar.model }).toString();
          const similarRes = await axios.get(`${API_BASE}/api/cars/similar?${similarQuery}`, {
            withCredentials: true,
          });

          const allSimilar = Array.isArray(similarRes.data.cars) ? similarRes.data.cars : [];
          const filteredSimilar = allSimilar.filter((c) => c._id !== fetchedCar._id);
          setSimilarCars(filteredSimilar);
        }
      } catch (error) {
        console.error("Error fetching car details:", error);
        toast.error("Failed to load car details or related products.");
      } finally {
        setLoading(false);
      }
    };

    fetchCarAndSimilar();
    setQuantity(1);
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading car details...</p>;
  if (!car) return <p className="text-center py-10">Car not found.</p>;

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    setIsButtonDisabled(true);
    addToCart({ ...car, productId: car._id, quantity });
    toast.success(`${quantity} x ${car.name} added to cart!`);
    setTimeout(() => setIsButtonDisabled(false), 800);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src={car.image && car.image.startsWith("http") ? car.image : "/placeholder.png"}
              alt={car.name || "Car"}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-4">Ksh {car.price?.toLocaleString()}</p>
            <p className="text-gray-500 mb-6 border-b pb-4 leading-relaxed">{car.description}</p>

            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-2">Quantity</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-lg hover:bg-gray-300 transition"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="text-xl font-bold w-4 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-lg hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-3 px-6 rounded w-full mb-4 font-semibold text-lg transition ${
                isButtonDisabled ? "cursor-not-allowed opacity-70" : "hover:bg-gray-800"
              }`}
            >
              {isButtonDisabled ? "Adding to Cart..." : "Add to Cart"}
            </button>

            <div className="mt-8 border-t pt-6">
              <h3 className="text-lg font-bold mb-3 border-b pb-2">Car Specifications</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Model</td>
                    <td className="py-2">{car.model || "N/A"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Fuel Type</td>
                    <td className="py-2">{car.fuelType || "N/A"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Transmission</td>
                    <td className="py-2">{car.transmission || "N/A"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Year</td>
                    <td className="py-2">{car.year || "N/A"}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Location</td>
                    <td className="py-2">{car.location || "N/A"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {similarCars.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl text-center font-bold mb-8 uppercase tracking-wider">
              You may also like
            </h2>
            <ProductsGrid products={similarCars} />
          </div>
        )}

        {similarCars.length === 0 && !loading && (
          <p className="text-center mt-20 text-gray-500">No similar cars found at this time.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;