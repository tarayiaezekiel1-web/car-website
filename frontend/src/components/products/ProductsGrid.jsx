import { useNavigate } from "react-router-dom";

function ProductsGrid({ products }) {
  const navigate = useNavigate();

  if (!products) return <p className="text-center py-10">Loading cars...</p>;
  if (products.length === 0) return <p className="text-center py-10">No cars available...</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2">
      {products.map((car) => (
        <div
          key={car._id}
          className="border rounded-lg shadow p-2 cursor-pointer hover:shadow-lg transition"
          onClick={() => navigate(`/car/${car._id}`)}
        >
          <img
            src={car.image || "/placeholder.png"}
            alt={car.name || "Car"}
            className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-md"
          />
          <h3 className="text-sm font-semibold mt-2 truncate">{car.name}</h3>
          <p className="text-gray-700 text-xs">Brand: {car.brand || "N/A"}</p>
          <p className="text-gray-700 text-xs">Year: {car.year || "N/A"}</p>
          <p className="text-gray-700 text-xs">Fuel: {car.fuelType || "N/A"}</p>
          <p className="text-gray-700 text-xs">Transmission: {car.transmission || "N/A"}</p>
          <p className="text-gray-700 text-xs">Location: {car.location || "N/A"}</p>
          <p className="text-gray-600 text-xs font-semibold">Ksh {car.price?.toLocaleString() || "N/A"}</p>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{car.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid;