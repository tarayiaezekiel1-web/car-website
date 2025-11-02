import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout.jsx";

import { Toaster } from "sonner";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import CollectionPage from "./pages/CollectionPage.jsx";
import ProductDetails from "./components/products/ProductDetails.jsx";
import CheckOut from "./components/cart/CheckOut.jsx";
import OrdersConfirmationPage from "./pages/OrdersConfirmationPage.jsx";
import OrderDetailsPage from "./pages/OrderDetailsPage.jsx";
import MyOrdersPage from "./pages/MyOrdersPage.jsx";
import PostCar from "./Pages/postCar.jsx";
import { CartProvider } from "./components/context/cartContext.jsx" // ✅ import context
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider> {/* ✅ wrap everything inside provider */}
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="collections/:collection" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="order-confirmation" element={<OrdersConfirmationPage />} />
            <Route path="order/:id" element={<OrderDetailsPage />} />
            <Route path="/my-orders" element={<MyOrdersPage />} />
            <Route path="/postcar" element={<PostCar />} />
            <Route path="/car/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
