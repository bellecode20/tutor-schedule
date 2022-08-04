import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/modalSlice";
import profilesSlice from "../features/profilesSlice";
import clickedDateSlice from "../features/clickedDateSlice";
import calendarSlice from "../features/calendarSlice";
export const store = configureStore({
  reducer: {
    modal: modalSlice,
    profiles: profilesSlice,
    clickedDate: clickedDateSlice,
    calendar: calendarSlice,
  },
});
