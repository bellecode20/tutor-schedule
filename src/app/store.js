import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/modalSlice";
import profilesSlice from "../features/profilesSlice";
export const store = configureStore({
  reducer: {
    modal: modalSlice,
    profiles: profilesSlice,
  },
});
