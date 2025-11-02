import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaFilter } from "react-icons/fa";
import CarFilterSidebar from "../components/products/FilterSidebar";
import SortOptions from "../components/products/SortOptions";
import ProductsGrid from "../components/products/ProductsGrid";
import axios from "axios";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [currentFilters, setCurrentFilters] = useState({}); // ⭐️ New: State to hold current filters
  const [currentSort, setCurrentSort] = useState(''); // ⭐️ New: State for sorting criteria
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSideBar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 1. Refactor fetchCars to use current filters and sort state
  const fetchCars = useCallback(async (filters = currentFilters, sort = currentSort) => {
    try {
      // ⭐️ Construct the query object: filters + sorting
      const queryParams = { ...filters };
      if (sort) {
        queryParams.sort = sort;
      }
      
      const query = new URLSearchParams(queryParams).toString();
      const res = await axios.get(`http://localhost:5000/api/cars?${query}`);
      
      setProducts(res.data.cars || []);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  }, [currentFilters, currentSort]); // Dependencies ensure we use the latest state

  // 2. Handlers for Filter and Sort changes
  const handleApplyFilters = (newFilters) => {
      setCurrentFilters(newFilters); // Update the filter state
      setIsSidebarOpen(false); // Close sidebar after applying filters
      // fetchCars will run via the useEffect below
  };

  const handleSortChange = (newSortOption) => {
      setCurrentSort(newSortOption); // Update the sort state
      // fetchCars will run via the useEffect below
  };

  // 3. Effect to trigger data fetch whenever currentFilters or currentSort changes
  useEffect(() => {
    // This effect ensures data is fetched when the component mounts or when
    // either filters or sort state is updated by a handler.
    fetchCars(currentFilters, currentSort);
  }, [currentFilters, currentSort, fetchCars]);


  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile filter button */}
      <button
        onClick={toggleSideBar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        {/* Pass the new handler to update filters */}
        <CarFilterSidebar onApplyFilters={handleApplyFilters} />
      </div>

      {/* Cars grid */}
      <div className="flex p-4">
        <h3 className="text-xl uppercase mb-4">All Cars ({products.length})</h3>
        
        {/* Pass the handler and current value to the SortOptions component */}
        <SortOptions onSortChange={handleSortChange} currentSort={currentSort} /> 
        
        <ProductsGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;