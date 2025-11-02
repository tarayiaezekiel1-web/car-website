import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FiChevronLeft, FiChevronRight, FiMapPin } from "react-icons/fi";
import { FaGasPump, FaCogs, FaCalendarAlt } from "react-icons/fa";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [cars, setCars] = useState([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Fetch only new arrival cars
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/cars", {
          withCredentials: true,
        });

        const allCars = res.data.cars || res.data;
        const newArrivalCars = allCars.filter(
          (car) =>
            car.category &&
            car.category.toLowerCase().replace(/\s/g, "") === "newarrivals"
        );

        setCars(newArrivalCars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  // Scroll controls
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Update scroll buttons
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);
    return () => container.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <section className="relative py-10 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-2xl font-bold mb-4 capitalize">
          Explore New Arrivals
        </h2>
        <p className="text-sm text-gray-500 mb-8 tracking-tight max-w-md mx-auto">
          Discover our latest cars — freshly added to give you the best deals and newest models.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex space-x-2 z-10">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border bg-white shadow text-black hover:bg-gray-100 transition ${
              !canScrollLeft && "opacity-30 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-full border bg-white shadow text-black hover:bg-gray-100 transition ${
              !canScrollRight && "opacity-30 cursor-not-allowed"
            }`}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-scroll flex space-x-5 scrollbar-hide px-5 scroll-smooth"
      >
        {cars.length > 0 ? (
          cars.map((car) => {
            const imageUrl =
              car.image?.startsWith("http") ? car.image : `/placeholder.png`;

            return (
              <div
                key={car._id}
                className="min-w-[300px] flex-shrink-0 relative rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition"
              >
                <img
                  src={imageUrl}
                  alt={car.name || "Car"}
                  className="w-full h-[400px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 backdrop-blur-md text-white p-4">
                  <h4 className="font-semibold text-lg truncate">
                    {car.name || "Unknown Car"}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-gray-200">
                    Ksh {car.price?.toLocaleString() || "N/A"}
                  </p>

                  {/* Extra details */}
                  <div className="mt-2 text-xs flex flex-wrap justify-between gap-1">
                    <span className="flex items-center gap-1">
                      <FiMapPin className="text-gray-300" />
                      {car.location || "Unknown"}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaGasPump className="text-gray-300" />
                      {car.fuelType || "N/A"}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCogs className="text-gray-300" />
                      {car.transmission || "N/A"}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-gray-300" />
                      {car.year || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 w-full">
            No new arrivals yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
