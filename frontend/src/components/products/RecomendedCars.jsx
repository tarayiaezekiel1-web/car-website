import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import api from "../../lib/axios";

const RecomendedCars= () => {
  const scrollRef = useRef(null);
  const [cars, setCars] = useState([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

useEffect(() => {
  const fetchCars = async () => {
    try {
      const res = await api.get("/cars", { withCredentials: true }); //

        const allCars = res.data.cars || res.data;
        const filtered = allCars.filter(
          (car) =>
            car.category &&
            car.category.toLowerCase().replace(/\s/g, "") === "recommended"
        );

        setCars(filtered);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

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
        <h2 className="text-2xl font-bold mb-4 capitalize">Recomended Cars</h2>
        <p className="text-sm text-gray-500 mb-8 tracking-tight max-w-md mx-auto">
          Check out the most popular cars our customers love and buy the most.
        </p>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex space-x-2 z-10">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border bg-white shadow hover:bg-gray-100 transition ${
              !canScrollLeft && "opacity-30 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-full border bg-white shadow hover:bg-gray-100 transition ${
              !canScrollRight && "opacity-30 cursor-not-allowed"
            }`}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-scroll flex space-x-5 scrollbar-hide px-5 scroll-smooth"
      >
        {cars.length > 0 ? (
          cars.map((car) => (
            <div
              key={car._id}
              className="min-w-[300px] flex-shrink-0 relative rounded-lg overflow-hidden group"
            >
              <img
                src={
                  car.image?.startsWith("http") ? car.image : `/placeholder.png`
                }
                alt={car.name || "Car"}
                className="w-full h-[400px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 backdrop-blur-md text-white p-4">
                <h4 className="font-semibold">{car.name}</h4>
                <p className="mt-1 text-sm">Ksh {car.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 w-full">No top sales yet.</p>
        )}
      </div>
    </section>
  );
};

export default RecomendedCars;
