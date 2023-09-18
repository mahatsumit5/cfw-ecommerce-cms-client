import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    setOrder: (state, { payload }) => {
      if (state.orders.length === 0 && payload.length === 0) {
        return;
      }
      state.orders = payload;
    },
  },
});
const { reducer, actions } = orderSlice;
export const { setOrder } = actions;
export default reducer;
