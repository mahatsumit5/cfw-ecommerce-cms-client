import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  catalogue: [],
};

const catagorySlice = createSlice({
  name: "Catagory",
  initialState,
  reducers: {
    setCatagory: (state, { payload }) => {
      if (state.catalogue.length === 0 && payload.length === 0) {
        return;
      }
      state.catalogue = payload;
    },
  },
});
const { reducer, actions } = catagorySlice;
export const { setCatagory } = actions;
export default reducer;
