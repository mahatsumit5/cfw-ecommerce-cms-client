import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SignIn } from "./pages/signin-singup/SignIn";
import { SignUp } from "./pages/signin-singup/SignUp";
import { Profile } from "./pages/profile/Profile";
import { VerifyEmail } from "./pages/verifyEmail/verifyEmail";
import { Dashboard } from "./pages/dashboad/Dashboard";
import { Products } from "./pages/products/Products";
import { Sales } from "./pages/sales/Sales";
import { Customers } from "./pages/customers/Customers";
import { Catalogue } from "./pages/catalogue/Catalogue";
import { Payment } from "./pages/payment/Payment";
import { Orders } from "./pages/orders/Orders";
import { Admin } from "./pages/admin/Admin";
import { SingUpForm } from "./components/admin-signup/SingUpForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCataloguesAction } from "./Action/catelogueAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCataloguesAction());
  }, [dispatch]);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/admin-verification" element={<VerifyEmail />} />
        <Route path="/new-admin" element={<SignUp />} />
        {/* privates routers */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="products" element={<Products />} />
        <Route path="customers" element={<Customers />} />
        <Route path="sales" element={<Sales />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="payment" element={<Payment />} />
        <Route path="orders" element={<Orders />} />
        <Route path="admin" element={<Admin />} />
        <Route path="new-user" element={<SingUpForm />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
