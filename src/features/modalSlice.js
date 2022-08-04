import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isShown: false,
  id: "successSaving",
  total: [
    {
      id: "successSaving",
      mode: "Success",
      mainText: "저장~",
      subText: "저장했어요",
      buttonType: "one",
      buttonLinks: process.env.REACT_APP_PATH,
    },
    {
      id: "sameName",
      mode: "Error",
      mainText: "앗...",
      subText: "똑같은 이름의 학생이 있어요",
      buttonType: "one",
      buttonLinks: null,
    },
    {
      id: "writtenYet",
      mode: "Error",
      mainText: "앗...",
      subText: "작성하지 않은 항목이 있어요",
      buttonType: "one",
      buttonLinks: null,
    },
    {
      id: "noStudentInHomework",
      mode: "Error",
      mainText: "앗...",
      subText: "학생이 없어요",
      buttonType: "two",
      buttonLinks: [
        process.env.REACT_APP_PATH,
        process.env.REACT_APP_PATH + "/buildprofile",
      ],
    },
    {
      id: "existHomework",
      mode: "Error",
      mainText: "앗...",
      subText: "이미 숙제가 있어요",
      buttonType: "one",
      buttonLinks: null,
    },
  ],
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleShowing: (state) => {
      state.isShown = !state.isShown;
    },
    changeId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { toggleShowing, changeId } = modalSlice.actions;
export default modalSlice.reducer;
