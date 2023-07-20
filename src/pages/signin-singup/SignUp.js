import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { SingUpForm } from "../../components/admin-signup/SingUpForm";
import { ReactComponent as YourSvg } from "../../assests/signup.svg";
export const SignUp = () => {
  return (
    <div>
      <Header />
      <main className="main ">
        <div className="imagebox d-flex justify-content-center">
          <SingUpForm width="100%" height="auto" />
          <YourSvg />
        </div>
      </main>
      <Footer />
    </div>
  );
};
