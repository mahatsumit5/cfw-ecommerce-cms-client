import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { SignInFormComponent } from "../../components/signInForm/signIn";

export const SignIn = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="imagebox d-flex justify-content-center p-5">
          <SignInFormComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
};
