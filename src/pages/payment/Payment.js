import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Button, Form } from "react-bootstrap";
import { CustomModal } from "../../components/customModal/customModal";
import { PaymentForm } from "../../components/payment/paymentForm";
import { PaymentTable } from "../../components/payment/paymentTable";
import { useDispatch, useSelector } from "react-redux";
import { setModalShow } from "../../systemSlice";

export const Payment = () => {
  const { paymentOptions } = useSelector((store) => store.payments);
  const [displayTable, setDisplayTable] = useState(paymentOptions);
  const dispatch = useDispatch();

  useEffect(() => {
    setDisplayTable(paymentOptions);
  }, [paymentOptions, dispatch]);

  const handleShowModal = () => {
    dispatch(setModalShow(true));
  };
  const handleOnChange = (e) => {
    const { value } = e.target;
    const filteredItems = paymentOptions.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setDisplayTable(filteredItems);
  };
  return (
    <AdminLayout title="Payment">
      <CustomModal title="Add New Payment Methods">
        <PaymentForm />
      </CustomModal>

      <div className="w-100 mt-5 p-3 d-flex rounded justify-content-between shadow gap-4 ">
        <h3>List of Payment options </h3>
        <div className="">
          <Form.Control
            size="lg"
            placeholder="search"
            onChange={handleOnChange}
          />
        </div>
        <Button variant="dark" onClick={handleShowModal}>
          Add new Payment
        </Button>
      </div>

      <div>
        <PaymentTable displayTable={displayTable} />
      </div>
    </AdminLayout>
  );
};
