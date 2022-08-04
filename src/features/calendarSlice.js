import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  calendar: {},
};
export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    changeCalendar: (state, action) => {
      state.calendar = action.payload;
    },
  },
});

export const { changeCalendar } = calendarSlice.actions;
export default calendarSlice.reducer;
