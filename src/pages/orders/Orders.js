import React, { useEffect } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "id", headerName: "Order ID", width: 150 },
  { field: "status", headerName: "Status", width: 90 },
  {
    field: "fName",
    headerName: "First name",
    width: 100,
    editable: false,
  },

  {
    field: "totalAmount",
    headerName: "Amount",
    width: 110,
    editable: true,
  },
  {
    field: "method",
    headerName: "Method",
    width: 110,
    editable: true,
  },
  {
    field: "isPaid",
    headerName: "ISPAid",
    width: 110,
    editable: true,
  },
];

export const Orders = () => {
  const { orders } = useSelector((store) => store.orderData);
  const rows = orders.map((item) => {
    return { ...item.user, ...item.payment, id: item._id, status: item.status };
  });
  return (
    <AdminLayout title="Orders">
      <Box sx={{ width: "100%" }}>
        <DataGrid
          density="comfortable"
          autoHeight={true}
          autoPageSize={true}
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
        />
      </Box>
    </AdminLayout>
  );
};
