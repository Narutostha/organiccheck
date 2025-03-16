import "./App.css";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import LandingPage from "./pages/LandingPage";
import InnerLayout from "./pages/InnerLayout";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import CartPage from "./pages/CartPage";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AboutSection from "./pages/AboutSection";
import Sales from "./pages/Sales";
import CartContextProvider from "./Context/CartContext";
import CheckoutPage from "./pages/CheckOutPage";
import OrderSubmit from "./pages/OrderSubmit";
// import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/products" element={<InnerLayout />}>
            <Route path="/products/" element={<ProductPage />}></Route>
            <Route path="/products/:category" element={<ProductPage />}></Route>
          </Route>
          <Route path="/productdetail" element={<ProductDetail />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/ordersubmit" element={<OrderSubmit />}></Route>

          {/* <Route path="/login" element={<LoginPage />}></Route> */}
          <Route path="/productdetail" element={<ProductDetail />}></Route>
          <Route path="/about" element={<AboutSection />}></Route>
          <Route path="/sale" element={<Sales />}></Route>
        </Route>

        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
