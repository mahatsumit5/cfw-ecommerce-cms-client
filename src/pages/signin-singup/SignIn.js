import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { SignInFormComponent } from "../../components/signInForm/signInForm";

export const SignIn = () => {
  return (
    <div className="signin">
      <main className="main">
        {/* <Header /> */}

        <div className="d-flex justify-content-center pt-5">
          <SignInFormComponent />
        </div>
      </main>
    </div>
  );
};
