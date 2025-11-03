/*

import { useNavigate } from "react-router-dom";

function ProductsGrid({ products }) {
  const navigate = useNavigate();

  if (!products) return <p>Loading cars...</p>;
  if (products.length === 0) return <p>loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((car) => (
        <div
          key={car._id}
          className="border rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
          onClick={() => navigate(`/car/${car._id}`)} // ✅ navigate to details page
        >
          <img
            src={car.image || "/placeholder.png"}
            alt={car.name || "Car"}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-2">{car.name}</h3>
          <p className="text-gray-600">Ksh {car.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid;
*/

import { useNavigate } from "react-router-dom";

function ProductsGrid({ products }) {
  const navigate = useNavigate();

  if (!products) return <p>Loading cars...</p>;
  if (products.length === 0) return <p>No cars available...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((car) => (
        <div
          key={car._id}
          className="border rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
          onClick={() => navigate(`/car/${car._id}`)}
        >
          <img
            src={car.image || "/placeholder.png"}
            alt={car.name || "Car"}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-sm font-semibold mt-2">{car.name}</h3>
          <p className="text-gray-700 text-xs">Brand: {car.brand}</p>
          <p className="text-gray-700 text-xs">Year: {car.year}</p>
          <p className="text-gray-700 text-xs">Fuel: {car.fuelType}</p>
          <p className="text-gray-700 text-xs">Transmission: {car.transmission}</p>
          <p className="text-gray-700 text-xs">Location: {car.location}</p>
          <p className="text-gray-700 text-xs">Category: {car.category}</p>
          <p className="text-gray-600 text-xs font-semibold">Ksh {car.price}</p>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {car.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid;

