import React from "react";
import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import { SingUpForm } from "../../admin-signup/SingUpForm";

export const SignUp = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <SingUpForm />
      </main>
      <Footer />{" "}
    </div>
  );
};
