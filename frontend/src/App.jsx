/*

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout.jsx";

import { Toaster } from "sonner";



import CollectionPage from "./Pages/CollectionPage.jsx";
import ProductDetails from "./components/products/ProductDetails.jsx";
import CheckOut from "./components/cart/CheckOut.jsx";
import OrdersConfirmationPage from "./Pages/OrdersConfirmationPage.jsx";
import OrderDetailsPage from "./Pages/OrderDetailsPage.jsx";
import MyOrdersPage from "./Pages/MyOrdersPage.jsx";
import PostCar from "./Pages/postCar.jsx";
import { CartProvider } from "./components/context/cartContext.jsx" // ✅ import context
import Home from "./Pages/Home.jsx";

import Register from "./Pages/Register.jsx"





function App() {
  return (
    <BrowserRouter>
      <CartProvider> { ✅ wrap everything inside provider */
    /*
    }
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
          
           <Route path="register" element={<Register/>}/>
            
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
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout.jsx";
import { Toaster } from "sonner";

import CollectionPage from "./Pages/CollectionPage.jsx";
import ProductDetails from "./components/products/ProductDetails.jsx";
import CheckOut from "./components/cart/CheckOut.jsx";
import OrdersConfirmationPage from "./Pages/OrdersConfirmationPage.jsx";
import OrderDetailsPage from "./Pages/OrderDetailsPage.jsx";
import MyOrdersPage from "./Pages/MyOrdersPage.jsx";
import PostCar from "./Pages/postCar.jsx";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";

import { CartProvider } from "./components/context/cartContext.jsx";

// 🔹 NEW Construction Pages
import Construction from "./Pages/construction.jsx";
import ConstructionProjects from "./Pages/constructionProjects.jsx";
import ProjectDetails from "./Pages/ProjectDetails.jsx";
import About from "./Pages/About.jsx";
import Impact from "./Pages/Impact.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Delivery from "./Pages/Delivery.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Toaster position="top-right" />

        <Routes>
          <Route path="/" element={<UserLayout />}>
            
            {/* Home */}
            <Route index element={<Home />} />

            {/* Auth */}
            <Route path="register" element={<Register />} />

            {/* Car Marketplace */}
            <Route path="collections/:collection" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="car/:id" element={<ProductDetails />} />
            <Route path="postcar" element={<PostCar />} />

            {/* Cart & Orders */}
            <Route path="checkout" element={<CheckOut />} />
            <Route path="order-confirmation" element={<OrdersConfirmationPage />} />
            <Route path="order/:id" element={<OrderDetailsPage />} />
            <Route path="my-orders" element={<MyOrdersPage />} />

            {/* 🔹 Construction Section */}
            <Route path="construction" element={<Construction />} />
            <Route path="construction/projects" element={<ConstructionProjects />} />
            <Route path="construction/project/:id" element={<ProjectDetails />} />
            <Route path="construction/about" element={<About/>}></Route>
            <Route path="construction/impact" element={<Impact/>}></Route>
            <Route path="construction/contact" element={<ContactUs/>}/>
            <Route path="construction/quality" element={<Delivery/>}/>

          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;