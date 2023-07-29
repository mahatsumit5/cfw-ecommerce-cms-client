import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  catagories: [],
};

const catagorySlice = createSlice({
  name: "Catagory",
  initialState,
  reducers: {
    setCatagory: (state, { payload }) => {
      if (state.catagories.length === 0 && payload.length === 0) {
        return;
      }
      state.catagories = payload;
    },
  },
});
const { reducer, actions } = catagorySlice;
export const { setCatagory } = actions;
export default reducer;
