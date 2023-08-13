import React from "react";
import { useState } from "react";
import "./Reset.css";
import { RequestOTP } from "../../components/admin-signup/RequestOTP";
import { ResetPass } from "../../components/admin-signup/ResetPassword";
import { changePassword, reqOTP } from "../../axiosHelper/userAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ResetPassPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [formToShow, setFormToShow] = useState("otp");
  const handleOnOTPRequest = async (email) => {
    setEmail(email);
    setFormToShow("reset");
    const pendingResp = reqOTP(email);
    toast.promise(pendingResp, { Pending: "Please Wait" });
    const { status, message } = await pendingResp;
  };
  const handleOnResetPassword = async (obj) => {
    const pending = changePassword(obj);
    toast.promise(pending, { Pending: "Please Wait" });
    const { status, message } = await pending;
    toast[status](message);
    if (status === "success") navigate("/");
  };
  const forms = {
    otp: <RequestOTP handleOnOTPRequest={handleOnOTPRequest} />,
    reset: (
      <ResetPass
        email={email}
        handleOnResetPassword={handleOnResetPassword}
        setFormToShow={setFormToShow}
      />
    ),
  };
  return (
    <div className=" signin  ">
      <main className="main p-5">{forms[formToShow]}</main>
    </div>
  );
};
