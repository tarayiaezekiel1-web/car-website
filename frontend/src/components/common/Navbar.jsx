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
        {/* Left Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        {/* Center Navigation Links */}
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
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Profile */}
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-5 w-5 text-gray-600" />
          </Link>

          {/* Add/Create Button */}
          <Link
            to="/postcar" // ✅ Route for your "Add" or "Create" page
            className="hover:text-green-600 transition"
            title="Add New"
          >
            <FiPlus className="h-6 w-6 text-gray-700 hover:text-green-600" />
          </Link>

          {/* Cart */}
          <button onClick={toggleCartDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 bg-red-500 text-white text-xs rounded-full px-2 py-0">
              4
            </span>
          </button>

          {/* Search */}
          <div className="overflow-hidden">
            <Searchbar />
          </div>

          {/* Mobile Menu */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-5 w-5 text-gray-600" />
          </button>
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
            to="#"
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
            to="/login" // ✅ Route for your "Add" or "Create" page
            className="hover:text-green-600 transition"
            title="Add New"
          >
            <span className="text-xs">login</span>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar
