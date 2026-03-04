import { useNavigate } from "react-router-dom";

function ProductsGrid({ products }) {
  const navigate = useNavigate();

  if (!products) return <p>Loading cars...</p>;
  if (products.length === 0) return <p>No cars available...</p>;

  return (
   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {products.map((car) => (
        <div
          key={car._id}
          className="border rounded-lg shadow p-3 cursor-pointer hover:shadow-lg transition flex flex-col"
          onClick={() => navigate(`/car/${car._id}`)}
        >
          <img
            src={car.image?.startsWith("http") ? car.image : "/placeholder.png"}
            alt={car.name || "Car"}
            className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-md"
          />

          <div className="mt-2 flex flex-col gap-1">
            <h3 className="text-sm sm:text-base font-semibold">{car.name}</h3>
            {car.brand && <p className="text-gray-700 text-xs sm:text-sm">Brand: {car.brand}</p>}
            {car.year && <p className="text-gray-700 text-xs sm:text-sm">Year: {car.year}</p>}
            {car.fuelType && <p className="text-gray-700 text-xs sm:text-sm">Fuel: {car.fuelType}</p>}
            {car.transmission && <p className="text-gray-700 text-xs sm:text-sm">Transmission: {car.transmission}</p>}
            {car.location && <p className="text-gray-700 text-xs sm:text-sm">Location: {car.location}</p>}
            {car.category && <p className="text-gray-700 text-xs sm:text-sm">Category: {car.category}</p>}

            <p className="text-gray-600 text-xs sm:text-sm font-semibold">Ksh {car.price?.toLocaleString()}</p>

            {car.description && (
              <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">{car.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid;