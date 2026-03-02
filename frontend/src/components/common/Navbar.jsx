/*

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2"
import { FiPlus } from "react-icons/fi" // ✅ Added Create/Add icon
import Searchbar from "./Searchbar"
import CartDrawer from "../layout/cartDrawer"
import { IoMdClose } from "react-icons/io"

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen)
  }

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

      
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all"
            className="text-gray-600 hover:text-black text-sm uppercase"
          >
            All Cars
          </Link>
          <Link to="#" className="text-gray-600 hover:text-black text-sm uppercase">
            New Arrivals
          </Link>
          <Link to="#" className="text-gray-600 hover:text-black text-sm uppercase">
            Secondhand
          </Link>
          <Link to="#" className="text-gray-600 hover:text-black text-sm uppercase">
            Top Sales
          </Link>
          <Link
            to="/register" // ✅ Route for your "Add" or "Create" page
            className="hover:text-green-600 text-sm uppercase transition"
            title="Add New"
          >
            <span className="text-xs">signup</span>
          </Link>
        </div>

       
        <div className="flex items-center space-x-4">
        
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-5 w-5 text-gray-600" />
          </Link>

         
          <Link
            to="/postcar" // ✅ Route for your "Add" or "Create" page
            className="hover:text-green-600 transition"
            title="Add New"
          >
            <FiPlus className="h-6 w-6 text-gray-700 hover:text-green-600" />
          </Link>

        
          <button onClick={toggleCartDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 bg-red-500 text-white text-xs rounded-full px-2 py-0">
              4
            </span>
          </button>

         
          <div className="overflow-hidden">
            <Searchbar />
          </div>

          
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </nav>

     
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4 px-4">Menu</h2>
        <nav className="space-y-4 px-4">
          <Link
            to="collections/all"
            onClick={toggleNavDrawer}
            className="block text-gray-600 hover:text-black"
          >
            all cars
          </Link>
          <Link
            to="#"
            onClick={toggleNavDrawer}
            className="block text-gray-600 hover:text-black"
          >
            new arrivals
          </Link>
          <Link
            to="#"
            onClick={toggleNavDrawer}
            className="block text-gray-600 hover:text-black"
          >
            top sales
          </Link>
          <Link
            to="#"
            onClick={toggleNavDrawer}
            className="block text-gray-600 hover:text-black"
          >
            second hand
          </Link>
         
           <Link
            to="/register" // ✅ Route for your "Add" or "Create" page
            className="hover:text-green-600 transition"
            title="Add New"
          >
            <span className="text-xs">signup</span>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar
*/
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Searchbar from "./Searchbar";
import CartDrawer from "../layout/cartDrawer";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [whoDropdown, setWhoDropdown] = useState(false);
  const [constructionDropdown, setConstructionDropdown] = useState(false);

  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);
  const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div>
            <Link to="/" className="text-2xl font-medium text-blue-600">
              BuildRight
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-black text-sm uppercase"
            >
              What We Deliver
            </Link>

            {/* Who We Are Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWhoDropdown(true)}
              onMouseLeave={() => {
                setWhoDropdown(false);
                setConstructionDropdown(false);
              }}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-black text-sm uppercase">
                Who We Are <FaChevronDown />
              </button>

              {whoDropdown && (
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded w-48">
                  {/* Cars Link */}
                  <Link
                    to="/collections/all"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Cars
                  </Link>

                  {/* Construction Nested Dropdown */}
                  <div
                    className="relative group"
                    onMouseEnter={() => setConstructionDropdown(true)}
                    onMouseLeave={() => setConstructionDropdown(false)}
                  >
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
                      Construction <FaChevronDown />
                    </button>

                    {constructionDropdown && (
                      <div className="absolute left-full top-0 mt-0 ml-0 bg-white shadow-lg rounded w-48">
                         <Link
                          to="/construction"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Home
                        </Link>
                        <Link
                          to="/construction/projects"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Our Projects
                        </Link>
                        <Link
                          to="/construction/impact"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Our Impact to Society
                        </Link>
                        <Link
                          to="/construction/about"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          About Us
                        </Link>
                        <Link
                          to="/construction/quality"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          How We Deliver Quality Work
                        </Link>
                        <Link
                          to="/construction/contact"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Contact Us
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="hover:text-black">
              <HiOutlineUser className="h-5 w-5 text-gray-600" />
            </Link>

            <Link
              to="/postcar"
              className="hover:text-green-600 transition"
              title="Add New"
            >
              <FiPlus className="h-6 w-6 text-gray-700 hover:text-green-600" />
            </Link>

            <button
              onClick={toggleCartDrawer}
              className="relative hover:text-black"
            >
              <HiOutlineShoppingBag className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 bg-red-500 text-white text-xs rounded-full px-2 py-0">
                4
              </span>
            </button>

            <div className="overflow-hidden">
              <Searchbar />
            </div>

            {/* Mobile Menu */}
            <button onClick={toggleNavDrawer} className="md:hidden">
              <HiBars3BottomRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4 px-4">Menu</h2>
        <nav className="space-y-4 px-4">
          <Link
            to="#what-we-deliver"
            onClick={toggleNavDrawer}
            className="block text-gray-600 hover:text-black"
          >
            What We Deliver
          </Link>

          {/* Mobile Who We Are */}
          <div>
            <p className="font-medium text-gray-700 mb-1">Who We Are</p>
            <Link
              to="/collections/all"
              onClick={toggleNavDrawer}
              className="block px-4 py-1 text-gray-600 hover:text-black"
            >
              Cars
            </Link>
            <p className="px-4 py-1 text-gray-700">Construction</p>
            <div className="pl-6">
              <Link
                to="/construction/projects"
                onClick={toggleNavDrawer}
                className="block px-4 py-1 text-gray-600 hover:text-black"
              >
                Our Projects
              </Link>
              <Link
                to="/construction/impact"
                onClick={toggleNavDrawer}
                className="block px-4 py-1 text-gray-600 hover:text-black"
              >
                Our Impact to Society
              </Link>
              <Link
                to="/construction/about"
                onClick={toggleNavDrawer}
                className="block px-4 py-1 text-gray-600 hover:text-black"
              >
                About Us
              </Link>
              <Link
                to="/construction/quality"
                onClick={toggleNavDrawer}
                className="block px-4 py-1 text-gray-600 hover:text-black"
              >
                How We Deliver Quality Work
              </Link>
              <Link
                to="/construction/contact"
                onClick={toggleNavDrawer}
                className="block px-4 py-1 text-gray-600 hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
