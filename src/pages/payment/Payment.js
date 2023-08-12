import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Button, Form } from "react-bootstrap";
import { CustomModal } from "../../components/customModal/customModal";
import { PaymentForm } from "../../components/payment/paymentForm";
import { useDispatch, useSelector } from "react-redux";
import { setModalShow } from "../../systemSlice";
import { setDisplayTable } from "../../redux/displaySlice";
import {
  deletePaymentAction,
  getPaymentsAction,
  updatePaymentAction,
} from "../../Action/paymentAction";
import { CustomeTable } from "../../components/table/CustomeTable";

export const Payment = () => {
  const { paymentOptions } = useSelector((store) => store.payments);
  const dispatch = useDispatch();

  const column = [
    // { heading: "ID", value: "_id" },
    { heading: "STATUS", value: "status" },
    { heading: "TITLE", value: "title" },
    { heading: "DESCRIPTION", value: "description" },
  ];
  useEffect(() => {
    dispatch(setDisplayTable(paymentOptions));
    !paymentOptions.length && dispatch(getPaymentsAction());
  }, [paymentOptions, dispatch]);

  const handleToggleChange = (e) => {
    const { value, checked } = e.target;
    dispatch(
      updatePaymentAction({
        _id: value,
        status: checked ? "active" : "inactive",
      })
    );
  };

  const handleOndelete = (_id) => {
    dispatch(deletePaymentAction({ _id }));
  };
  const handleShowModal = () => {
    dispatch(setModalShow(true));
  };

  return (
    <AdminLayout title="Payment">
      <CustomModal title="Add New Payment Methods">
        <PaymentForm />
      </CustomModal>

      <div className="w-100 mt-5 p-3 d-flex rounded justify-content-between shadow gap-4 ">
        <h3>List of Payment options </h3>

        <Button variant="dark" onClick={handleShowModal}>
          Add new Payment
        </Button>
      </div>

      <div>
        <CustomeTable
          handleOnDelete={handleOndelete}
          handleToggleChange={handleToggleChange}
          column={column}
        />
      </div>
    </AdminLayout>
  );
};
