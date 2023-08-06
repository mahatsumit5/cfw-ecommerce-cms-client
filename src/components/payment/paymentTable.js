import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePaymentAction,
  getPaymentsAction,
  updatePaymentAction,
} from "../../Action/paymentAction";

export const PaymentTable = ({ displayTable }) => {
  const { paymentOptions } = useSelector((store) => store.payments);
  const dispatch = useDispatch();

  useEffect(() => {
    !paymentOptions.length && dispatch(getPaymentsAction());
  }, [dispatch, paymentOptions]);

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
    window.confirm("Are your sure?");

    dispatch(deletePaymentAction({ _id }));
  };
  return (
    <>
      <Table hover w-100 responsive="lg" className="" variant="light">
        <thead className="light-text">
          <tr className="font-monospace text-body-secondary ">
            <th className="text-body-secondary ">STATUS</th>
            <th className="text-body-secondary">TITLE</th>
            <th className="text-body-secondary">Description</th>
            <th className="text-body-secondary ">ACTION</th>
          </tr>
        </thead>
        <tbody className="mt-2">
          {displayTable.map(({ _id, status, title, description }) => (
            <tr key={_id} className="mt-2">
              <td className=" d-flex  " style={{ width: "" }}>
                <span
                  className={
                    status === "active"
                      ? " p-2 rounded  "
                      : " text-body-secondary p-2 rounded "
                  }
                  style={{ width: "100px" }}
                >
                  {status}
                </span>
                <span className=" p-2">
                  <Form.Check
                    type="switch"
                    title="status"
                    value={_id}
                    onChange={handleToggleChange}
                    checked={status === "active" ? true : false}
                  />
                </span>
              </td>
              <td>{title}</td>
              <td>{description}</td>
              <td className="d-flex gap-1 ">
                <Button variant="danger" onClick={() => handleOndelete(_id)}>
                  <AiFillDelete />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
