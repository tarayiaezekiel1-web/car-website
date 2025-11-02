import React from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();

  // 1. Calculate the total price
  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 2. Prepare and pass the necessary state to /checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
        // Prevent checkout on empty cart
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }
    
    // ⭐️ Structure the data exactly as the CheckOut component expects
    const orderDetails = {
      // Use a temporary ID or a date/time stamp
      orderId: 'TEMP-' + Date.now(), 
      
      // ⭐️ Rename cartItems to orderItems, and map to ensure necessary keys are present
      orderItems: cartItems.map(item => ({
        // Ensure ALL necessary keys are passed for the confirmation page
        productId: item._id, 
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image || "/placeholder.png",
        
        // Add car-specific details used in the confirmation page, 
        // using N/A as a fallback just in case:
        size: item.model || "N/A", // Using Model as a "size/variant" placeholder
        color: item.fuelType || "N/A", // Using Fuel Type as a "color/variant" placeholder
      })),
      
      // Pass the final total (optional, as CheckOut recalculates it)
      totalAmount: cartSubtotal, 
    };
    
    // Pass the state to the /checkout route
    navigate("/checkout", {
        state: {
            orderDetails: orderDetails 
        }
    });

    // Optionally close the drawer after initiating checkout
    toggleCartDrawer(); 
  };

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close button */}
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="text-xl font-bold">Your Cart ({cartItems.length})</h3>
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-400 hover:text-gray-600 transition" />
        </button>
      </div>

      {/* Cart content */}
      <div className="flex-grow p-4 overflow-y-auto">
        
        {cartItems.length === 0 ? (
          <p className="text-gray-500 mt-4 text-center">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-start mb-4 border-b pb-4"
            >
              {/* Image */}
              <img
                src={item.image || "/placeholder.png"}
                alt={item.name}
                className="w-24 h-20 object-cover rounded shadow-sm flex-shrink-0"
              />

              {/* Car Info */}
              <div className="ml-4 flex-1 min-w-0">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-md text-gray-700">Ksh **{(item.price * item.quantity).toFixed(2)}**</p>
                <p className="text-xs text-gray-500 truncate">Model: {item.model} | Fuel: {item.fuelType} </p>
                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
              </div>

              {/* Remove button */}
              <button
                className="text-sm text-red-500 hover:text-red-700 font-medium ml-2 flex-shrink-0"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Checkout button and total */}
      <div className="p-4 bg-white border-t sticky bottom-0">
        <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-bold">Subtotal:</span>
            <span className="text-lg font-bold">Ksh {cartSubtotal.toFixed(2)}</span>
        </div>
        <button
          onClick={handleCheckout}
          // Disable if the cart is empty
          disabled={cartItems.length === 0} 
          className={`w-full py-3 font-semibold transition rounded ${
            cartItems.length === 0 
            ? "bg-gray-400 text-gray-700 cursor-not-allowed" 
            : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Proceed to Checkout
        </button>
        <p className="text-xs tracking-tighter text-gray-500 mt-2 text-center">
          Shipping fee, taxes calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;