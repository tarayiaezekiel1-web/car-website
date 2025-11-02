import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PayPalButton from './PayPalButton';

const CheckOut = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  // Fallback if no order details are passed
  const cart = {
    products: orderDetails?.orderItems || [],
    totalPrice: orderDetails
      ? orderDetails.orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      : 0
  };

  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: ""
  });

  // Handler for all input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress(prevAddress => ({
      ...prevAddress,
      [name]: value
    }));
  };

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    if (!shippingAddress.firstName || !shippingAddress.address || !shippingAddress.city || !shippingAddress.postalCode || !shippingAddress.country) {
      alert("Please fill in all required shipping details before continuing.");
      return;
    }
    // In a real application, you would send this to your backend to create a real checkout/order
    setCheckoutId(Date.now()); 
  };

  const handlePaymentSuccess = () => {
    navigate("/order-confirmation", {
      state: {
        checkout: {
          _id: checkoutId,
          createdAt: new Date(),
          checkoutItems: cart.products.map((p) => ({
            productId: p.productId,
            name: p.name,
            size: p.size || "N/A",
            color: p.color || "N/A",
            price: p.price,
            quantity: p.quantity,
            image: p.image
          })),
          shippingAddress
        }
      }
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left section - Form */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-sm uppercase mb-6 font-semibold">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          {/* Contact and Delivery Form (Added Inputs) */}
          <h3 className="text-sm mb-4 font-medium">Shipping Information</h3>
          <div className="space-y-4">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={shippingAddress.firstName}
                onChange={handleInputChange}
                required
                className="w-full border p-2 rounded text-sm"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={shippingAddress.lastName}
                onChange={handleInputChange}
                className="w-full border p-2 rounded text-sm"
              />
            </div>

            {/* Address */}
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={shippingAddress.address}
              onChange={handleInputChange}
              required
              className="w-full border p-2 rounded text-sm"
            />

            {/* City and Postal Code */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={shippingAddress.city}
                onChange={handleInputChange}
                required
                className="w-full border p-2 rounded text-sm"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={shippingAddress.postalCode}
                onChange={handleInputChange}
                required
                className="w-full border p-2 rounded text-sm"
              />
            </div>
            
            {/* Country and Phone */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={shippingAddress.country}
                onChange={handleInputChange}
                required
                className="w-full border p-2 rounded text-sm"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (Optional)"
                value={shippingAddress.phone}
                onChange={handleInputChange}
                className="w-full border p-2 rounded text-sm"
              />
            </div>
          </div>
          {/* End of Contact and Delivery Form */}

          {/* Payment Section */}
          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-sm mb-4 font-medium">Pay with PayPal (Demo)</h3>
                <PayPalButton
                  amount={cart.totalPrice}
                  onSuccess={handlePaymentSuccess}
                  onError={() => alert("Payment failed. Please try again.")}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Section - Cart Summary (Unchanged) */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-sm uppercase mb-4 font-semibold">Order Summary</h3>
        <div className="space-y-4">
          {cart.products.map((item, i) => (
            <div key={i} className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.size || "Size N/A"} • {item.color || "Color N/A"}
                  </p>
                </div>
              </div>
              <p className="text-sm font-semibold">${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between font-medium text-gray-700">
          <span>Total:</span>
          <span>${cart.totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;