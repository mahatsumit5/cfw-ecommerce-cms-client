import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCataloguesAction } from "./Action/catelogueAction";
import { PrivateRoute } from "./components/private/PrivateRoute";
import { ResetPassPage } from "./pages/reset-password/resetPass";
import { getPaymentsAction } from "./Action/paymentAction";
import { NewProduct } from "./components/products/NewProduct";
import { getproductAction } from "./Action/productAction";
import { EditProducts } from "./pages/products/EditProduct";
import { getOrderAction } from "./Action/orderAction";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    dispatch(getOrderAction());
    dispatch(getCataloguesAction());
    dispatch(getPaymentsAction());
    dispatch(getproductAction());
  }, [dispatch, user]);
  return (
    <div className="">
      <Routes>
        {/* public routers */}
        <Route path="/" element={<SignIn />} />
        <Route path="/admin-verification" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassPage />} />
        {/* privates routers */}

        <Route path="/new-admin" element={<SignUp />} />

        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />

        <Route
          path="new-product"
          element={
            <PrivateRoute>
              <NewProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="products/edit/:_id"
          element={
            <PrivateRoute>
              <EditProducts />
            </PrivateRoute>
          }
        />
        <Route
          path="customers"
          element={
            <PrivateRoute>
              <Customers />
            </PrivateRoute>
          }
        />
        <Route
          path="sales"
          element={
            <PrivateRoute>
              <Sales />
            </PrivateRoute>
          }
        />
        <Route
          path="catalogue"
          element={
            <PrivateRoute>
              <Catalogue />
            </PrivateRoute>
          }
        />
        <Route
          path="payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route
          path="orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="new-user"
          element={
            <PrivateRoute>
              <SingUpForm />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
