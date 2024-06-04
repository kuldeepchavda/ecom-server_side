import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProductCard from "./components/ProductCard";
import Home from "./components/Home";
import ProductWindow from "./components/ProductWindow";
import Admin_AddProduct from "./components/admin/Admin_AddProduct";
import Explore from "./components/Explore";
import Admin_orders from "./components/Admin_orders";
import AdminSignup from "./components/admin/AdminLogin";
import AdminHome from "./components/admin/Admin-Home";
import Admin_products from "./components/admin/Admin_products";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product_card" element={<ProductCard />} />
          <Route path="/explore/product/:productId" element={<ProductWindow />} />
          <Route path="explore" element={<Explore />} />
          {/* admin routes */}
          <Route path="/admin/" element={<AdminSignup />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/addproduct" element={<Admin_AddProduct />} />
          <Route path="/admin/orders" element={<Admin_orders />} />
          <Route path="/admin/product_list" element={<Admin_products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
