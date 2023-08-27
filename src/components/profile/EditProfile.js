import React, { useEffect, useState } from "react";
import { Button, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { CustomeInput } from "../customeInput/CustomeInput";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCheck } from "react-icons/ai";
import { updateUserAction } from "../../Action/userAction";
import { CustomModal } from "../customModal/customModal";
import { setModalShow } from "../../systemSlice";

export const EditProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.userInfo);
  const object = {
    _id: user._id,
    email: user.email,
  };
  const [form, setForm] = useState({});
  const [img, setImg] = useState({});
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState("");
  const [error, setError] = useState();
  useEffect(() => {
    setForm(user);
  }, [dispatch]);

  const fAndLname = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "John",
      type: "text",
      className: "label",
      value: form.fName,
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "Smith",
      type: "text",
      className: "label",
      value: form.lName,
    },
  ];
  const emailAndPhone = [
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "john.smith@yahoo.com",
      type: "email",
      className: "label",
      disabled: true,
      value: form.email,
    },
    {
      label: "Phone",
      name: "phone",
      required: true,
      placeholder: "+61454987098",
      type: "string",
      className: "label",
      value: form.phone,
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setError("");
    if (name === "confirmPassword") {
      console.log(value);
      value !== form.newPassword
        ? setError("Password Do not Match")
        : setError("");
    }
    if (name === "newPassword") {
      value.length < 8 && setError("Password must be at least 8 characters.");
      !/[0-9]/.test(value) && setError("one number is required");
      !/[A-Z]/.test(value) && setError("At least one Uppercase is required");
      !/[a-z]/.test(value) && setError("At least one Lowercase is required");
    }
    setForm({ ...form, [name]: value });
  };
  const handleOnselectImg = (e) => {
    const { files } = e.target;
    setImg(files[0]);
  };
  const handleOndelete = (obj) => {
    dispatch(updateUserAction(obj));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (form.oldPassword && form.newPassword) {
      const { oldPassword, newPassword, ...rest } = form;

      const isUpdated = await dispatch(
        updateUserAction({ oldPassword, newPassword })
      );
      return isUpdated;
    }
    const {
      status,
      isVerified,
      verificationCode,
      createdAt,
      updatedAt,
      __v,
      ...rest
    } = form;
    const formDt = new FormData();
    formDt.append("password", password);
    for (let key in rest) {
      formDt.append(key, rest[key]);
    }
    if (img) {
      formDt.append("profile", img);
    }
    const isUpdated = await dispatch(updateUserAction(formDt));
    if (isUpdated) {
      dispatch(setModalShow(false));
      setPassword("");
    }
  };

  return (
    <div className=" d-flex justify-content-center w-100 ">
      <Container className="w-100 ">
        <div className="d-flex gap-5 flex-wrap">
          <div
            className="bg-secondary image-box rounded"
            style={{ height: "250px", width: "250px", position: "relative" }}
          >
            <img
              src={process.env.REACT_APP_ROOTSERVER + user.profile?.slice(6)}
              alt="avatar"
              className="profile"
            />
            {user.isVerified && (
              <span
                className="bg-primary text-light rounded"
                style={{ position: "absolute", bottom: "0", right: "-5px" }}
              >
                <AiOutlineCheck />
              </span>
            )}
          </div>
          <div className="gap-2 ">
            <CustomeInput
              label="Select New  Profile"
              name="profile"
              type="file"
              className="label"
              onChange={handleOnselectImg}
            />
            <Button
              className="mx-2"
              variant="secondary"
              onClick={() => {
                handleOndelete(object);
              }}
            >
              Delete Avatar
            </Button>
          </div>
        </div>
        <Form>
          <div className=" d-flex flex-wrap gap-4 mt-4">
            {fAndLname.map((item) => (
              <CustomeInput {...item} onChange={handleOnChange} />
            ))}
          </div>
          <div className=" d-flex  flex-wrap  gap-4 mt-2">
            {emailAndPhone.map((item) => (
              <CustomeInput {...item} onChange={handleOnChange} />
            ))}
          </div>
          <div className="   gap-4 mt-2">
            <CustomeInput
              label="Address"
              name="address"
              required={false}
              value={form.address}
              type="string"
              className="label"
              onChange={handleOnChange}
            />
          </div>

          <div className="d-flex justify-content-between gap-4">
            <Button
              onClick={() => {
                dispatch(setModalShow(true));
                setShowModal("confirmPassword");
              }}
            >
              Save
            </Button>
            <Button
              onClick={() => {
                dispatch(setModalShow(true));
                setShowModal("changePassword");
              }}
            >
              Change password
            </Button>
          </div>
        </Form>
        {showModal === "confirmPassword" && (
          <CustomModal title="Confirm Password">
            <Form onSubmit={handleOnSubmit}>
              <Form.Control
                type="password"
                name="password"
                placeholder="Confirm password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <div className="d-grid mt-2">
                <Button type="submit" variant="primary">
                  Update
                </Button>
              </div>
            </Form>
          </CustomModal>
        )}

        {showModal === "changePassword" && (
          <CustomModal title="Change Password">
            <Form onSubmit={handleOnSubmit}>
              <div>
                <Form.Control
                  type="password"
                  name="oldPassword"
                  placeholder="Old password"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mt-2">
                <Form.Control
                  type="password"
                  name="newPassword"
                  placeholder="New password"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mt-2">
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  onChange={handleOnChange}
                />
              </div>
              <span className="text-danger">{error}</span>
              <div className="d-grid mt-2">
                <Button type="submit" variant="primary" disabled={error !== ""}>
                  Update
                </Button>
              </div>
            </Form>
          </CustomModal>
        )}
      </Container>
    </div>
  );
};
