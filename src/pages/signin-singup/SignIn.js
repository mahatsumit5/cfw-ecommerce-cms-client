import React from "react";

import { SignInFormComponent } from "../../components/signInForm/signInForm";

export const SignIn = () => {
  return (
    <div className="signin">
      <main className="main">
        <div className="d-flex justify-content-center pt-5">
          <SignInFormComponent />
        </div>
      </main>
    </div>
  );
};
