import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  profiles: JSON.parse(localStorage.getItem("profilesKey")),
};
export const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    setProfilesKey: (state, action) => {
      state.profiles = action.payload;
    },
    setProfilesLS: (state) => {
      localStorage.setItem("profilesKey", JSON.stringify(state.profiles));
    },
  },
});

export const { setProfilesKey, setProfilesLS } = profilesSlice.actions;
export default profilesSlice.reducer;
