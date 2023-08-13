import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { CustomeInput } from "../customeInput/CustomeInput";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCheck } from "react-icons/ai";
import { updateUserAction } from "../../Action/userAction";

export const EditProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.userInfo);
  const [form, setForm] = useState({});
  const [img, setImg] = useState({});
  useEffect(() => {
    setForm(user);
  }, [dispatch, user]);

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
      required: false,
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
      required: false,
      placeholder: "+61454987098",
      type: "string",
      className: "label",
      value: form.phone,
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnselectImg = (e) => {
    const { files } = e.target;
    setImg(files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
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
    for (let key in rest) {
      formDt.append(key, rest[key]);
    }
    if (img) {
      formDt.append("profile", img);
    }
    dispatch(updateUserAction(formDt));
  };

  return (
    <div className="mt-5  d-flex justify-content-center  ">
      <Container className="w-75 rounded p-4 shadow">
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
            <Button className="mx-2">Upload New</Button>
            <Button className="mx-2" variant="secondary">
              {" "}
              Delete Avatar
            </Button>
          </div>
        </div>
        <Form onSubmit={handleOnSubmit}>
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
              value={user.address}
              type="string"
              className="label"
              onChange={handleOnChange}
            />
          </div>
          <div className="   gap-4 mt-2">
            <CustomeInput
              label="Select New  Profile"
              name="profile"
              type="file"
              className="label"
              onChange={handleOnselectImg}
            />
          </div>
          <div>
            <Button type="submit">Save Changes</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};
