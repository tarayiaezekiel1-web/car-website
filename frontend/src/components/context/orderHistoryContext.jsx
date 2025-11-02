// src/context/orderHistoryContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

const OrderContext = createContext();

// ⭐️ Custom hook to easily access order state and functions
export const useOrderHistory = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  // 1. Initialize state by loading orders from Local Storage
  const [orders, setOrders] = useState(() => {
    try {
      const storedOrders = localStorage.getItem('user_orders');
      // Parse the stored JSON or return an empty array if nothing is found
      return storedOrders ? JSON.parse(storedOrders) : [];
    } catch (error) {
      console.error("Error loading orders from localStorage:", error);
      // Return empty array on error to prevent application crash
      return []; 
    }
  });

  // 2. Save orders to Local Storage whenever the 'orders' state changes
  useEffect(() => {
    try {
      localStorage.setItem('user_orders', JSON.stringify(orders));
    } catch (error) {
      console.error("Error saving orders to localStorage:", error);
      toast.error("Failed to save order history. Local storage error.");
    }
  }, [orders]);

  // 3. Function to add a new confirmed order
  const addOrder = (newOrder) => {
    setOrders((prevOrders) => {
        // Prevent duplicate saving of the same order
        if (prevOrders.some(order => order._id === newOrder._id)) {
            return prevOrders;
        }
        // Prepend the new order to the list (most recent first)
        return [newOrder, ...prevOrders]; 
    });
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};