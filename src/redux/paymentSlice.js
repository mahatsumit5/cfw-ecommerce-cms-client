import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  paymentOptions: [],
};

const catagorySlice = createSlice({
  name: "PaymentOptions",
  initialState,
  reducers: {
    setPayments: (state, { payload }) => {
      if (state.paymentOptions.length === 0 && payload.length === 0) {
        return;
      }
      state.paymentOptions = payload;
    },
  },
});
const { reducer, actions } = catagorySlice;
export const { setPayments } = actions;
export default reducer;
