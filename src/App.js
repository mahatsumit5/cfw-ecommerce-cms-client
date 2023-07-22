import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SignIn } from "./pages/signin-singup/SignIn";
import { SignUp } from "./pages/signin-singup/SignUp";
import { Profile } from "./pages/profile/Profile";
import { VerifyEmail } from "./pages/verifyEmail/verifyEmail";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/new-admin" element={<SignUp />} />
        <Route path="/admin-verification" element={<VerifyEmail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
