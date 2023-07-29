import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modalShow: false,
};

const systemSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalShow: (state, { payload }) => {
      state.modalShow = payload;
    },
  },
});
const { reducer, actions } = systemSlice;
export const { setModalShow } = actions;
export default reducer;
