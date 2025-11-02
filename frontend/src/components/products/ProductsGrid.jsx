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
