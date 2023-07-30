import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modalShow: false,
  canvasShow: false,
};

const systemSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalShow: (state, { payload }) => {
      state.modalShow = payload;
    },
    setCanvasShow: (state, { payload }) => {
      state.canvasShow = payload;
    },
  },
});
const { reducer, actions } = systemSlice;
export const { setModalShow } = actions;
export const { setCanvasShow } = actions;
export default reducer;
