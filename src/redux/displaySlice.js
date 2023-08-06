import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  displayTable: [],
};

const displaySlice = createSlice({
  name: "DisplayTable",
  initialState,
  reducers: {
    setDisplayTable: (state, { payload }) => {
      if (state.displayTable.length === 0 && payload.length === 0) {
        return;
      }
      state.displayTable = payload;
    },
  },
});
const { reducer, actions } = displaySlice;
export const { setDisplayTable } = actions;
export default reducer;
