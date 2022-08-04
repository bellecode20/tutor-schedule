import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  date: "2022-01-01",
};
export const clickedDateSlice = createSlice({
  name: "clickedDate",
  initialState,
  reducers: {
    changeDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { changeDate } = clickedDateSlice.actions;
export default clickedDateSlice.reducer;
