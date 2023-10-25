import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import {
  deleteProductAction,
  updateProductAction,
} from "../../Action/productAction";
import { useNavigate } from "react-router-dom";

const MuiDataGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.productsData);

  //   hanlde toggle change
  const handleToggleChange = (e) => {
    const { value, checked } = e.target;
    dispatch(
      updateProductAction({
        _id: value,
        status: checked ? "active" : "inactive",
      })
    );
  };

  //   delete product
  const handleOnDelete = (id) => {
    dispatch(deleteProductAction(id));
  };

  //   edit page
  const handleOnEdit = (id) => {
    navigate(`/products/edit/${id}`);
  };

  const columns = [
    { field: "title", headerName: "Name", width: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      editable: false,
      renderCell: (params) => (
        <span className="d-flex">
          <Form.Check
            type="switch"
            title="status"
            value={params.row.id}
            onChange={handleToggleChange}
            checked={params.row.status === "active" ? true : false}
          />
        </span>
      ),
    },
    {
      field: "sku",
      headerName: "Product Sku",
      width: 150,
      height: 200,
      editable: true,
    },
    {
      field: "thumbnail",
      headerName: "Thumbnail",
      width: 180,
      editable: true,
      renderCell: (params) => (
        <div>
          <img src={params.row.thumbnail} height={200} width={150} />
        </div>
      ),
    },
    {
      field: "price",
      headerName: "Price",
      width: 110,
    },
    {
      field: "qty",
      headerName: "Stock",
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,

      renderCell: (params) => (
        <div className="d-flex gap-2">
          <Button
            variant="danger"
            onClick={() => handleOnDelete(params.row.id)}
          >
            <AiFillDelete />
          </Button>

          <Button variant="primary" onClick={() => handleOnEdit(params.row.id)}>
            <AiFillEdit />
          </Button>
        </div>
      ),
    },
  ];

  const rows = product.map((prdt) => {
    return {
      id: prdt._id,
      title: prdt.title,
      status: prdt.status,
      sku: prdt.sku,
      thumbnail: prdt.thumbnail,
      price: `$${prdt.price}`,
      qty: prdt.qty,
    };
  });

  return (
    <Box sx={{ mx: 5, width: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
      />
    </Box>
  );
};

export default MuiDataGrid;
