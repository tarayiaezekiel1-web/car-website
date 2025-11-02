import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrdersConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
const checkout = location.state?.checkout;
// ✅ Corrected access

  // Redirect if user comes directly without checkout data
  useEffect(() => {
    if (!checkout) {
      navigate("/");
    }
  }, [checkout, navigate]);

  if (!checkout) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Redirecting to homepage...
      </div>
    );
  }

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };
  console.log("Checkout Data:", checkout);


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-xl font-bold text-center text-green-600 mb-8">
        Thanks for your Order!
      </h1>

      <div className="p-6 rounded-lg border">
        {/* Order Header */}
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="text-xl font-semibold">Order ID: {checkout._id}</h2>
            <p className="text-gray-500">
              Order date: {new Date(checkout.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-green-600 text-sm">
              Estimated delivery: {calculateEstimatedDelivery(checkout.createdAt)}
            </p>
          </div>
        </div>

        {/* Ordered Items */}
        <div className="mb-10">
          {checkout.checkoutItems?.length > 0 ? (
            checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-md text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md font-semibold">${item.price}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items found in your order.</p>
          )}
        </div>

        {/* Payment and Delivery Info */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-semibold mb-2">Payment</h4>
            <p className="text-xs text-black">
              {checkout.paymentMethod || "PayPal"}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Delivery</h4>
            <p className="text-gray-900">{checkout.shippingAddress?.address}</p>
            <p className="text-xs text-black">
              {checkout.shippingAddress?.city}, {checkout.shippingAddress?.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersConfirmationPage;
