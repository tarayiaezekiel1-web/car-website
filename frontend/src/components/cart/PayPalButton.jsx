/*

import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"

const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "AReVlMWH2IfumiQZQwgPphGwbXnWZW4gkPJCKvrbPw1RJ9dnJMlLwa_iD4t_Iou_wY4PTnHLI8gE2kKJ" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount.toString() } }]
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            onSuccess(details);
          });
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
*/
import React from "react";

const PayPalButton = ({ amount, onSuccess }) => {
  const handleClick = () => {
    console.log("Simulating PayPal payment for demo:", amount);
    // Simulate payment success after 1 second
    setTimeout(() => {
      onSuccess({
        id: Date.now(),
        amount,
        payer: { name: "Demo User" },
      });
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-yellow-500 text-black py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
    >
      Pay ${amount} with PayPal (Demo)
    </button>
  );
};

export default PayPalButton;
