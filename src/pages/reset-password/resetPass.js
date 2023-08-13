import React from "react";
import { useState } from "react";
import "./Reset.css";
import { RequestOTP } from "../../components/admin-signup/RequestOTP";
import { ResetPass } from "../../components/admin-signup/ResetPassword";
import { changePassword, reqOTP } from "../../axiosHelper/userAxios";
import { toast } from "react-toastify";
export const ResetPassPage = () => {
  const [email, setEmail] = useState("");
  const [formToShow, setFormToShow] = useState("otp");
  const handleOnOTPRequest = async (email) => {
    setEmail(email);
    const pendingResp = reqOTP(email);
    toast.promise(pendingResp, { Pending: "Please Wait" });
    const { status, message } = await pendingResp;
    if (status === "success") {
      setFormToShow("reset");
    }
  };
  const handleOnResetPassword = async (obj) => {
    const pending = changePassword(obj);
    toast.promise(pending, { Pending: "Please Wait" });
    const { status, message } = await pending;
    toast[status](message);
  };
  const forms = {
    otp: <RequestOTP handleOnOTPRequest={handleOnOTPRequest} />,
    reset: (
      <ResetPass email={email} handleOnResetPassword={handleOnResetPassword} />
    ),
  };
  return (
    <div className=" signin  ">
      <main className="main p-5">{forms[formToShow]}</main>
    </div>
  );
};
