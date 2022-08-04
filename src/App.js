import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "./Components/Calendar.js";
import BuildHomework from "./Components/BuildHomework";
import BuildProfile from "./Components/Profiles/BuildProfile";
import Profiles from "./Components/Profiles/Profiles";
import DetailedProfile from "./Components/Profiles/DetailedProfile";
import NotFound from "./Components/NotFound";
import Modal from "./Components/Modal";
import { setProfilesKey } from "./features/profilesSlice.js";
import "./Styles/reset.scss";
import "./App.scss";
import "./Styles/_mediaQuery.scss";
function App() {
  const dispatch = useDispatch();
  const isShown = useSelector((state) => state.modal.isShown);
  if (typeof window !== "undefined") {
    // LS에서 직접 모든 데이터를 삭제하면 profiles 리덕스 스토어도 null이 된다.
    // null 데이터를 렌더링하면 문제가 생기므로 []로 값을 설정해준다.
    const saved = window.localStorage.getItem("profilesKey");
    if (saved == null) {
      window.localStorage.setItem("profilesKey", JSON.stringify([]));
      dispatch(setProfilesKey([]));
    }
  }
  const [homeworkInfo, setHomeworkInfo] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("homeworksKey");
      if (saved !== null) {
        return JSON.parse(saved);
      } else {
        return [];
      }
    }
  });
  return (
    <div className="App">
      <Routes>
        <Route
          path={process.env.REACT_APP_PATH}
          element={
            <Calendar homework={homeworkInfo} setHomework={setHomeworkInfo} />
          }
        ></Route>
        <Route
          path={`${process.env.REACT_APP_PATH}/homeworkview/:clickedDate`}
          element={
            <BuildHomework
              homework={homeworkInfo}
              setHomework={setHomeworkInfo}
            ></BuildHomework>
          }
        ></Route>
        <Route
          path={`${process.env.REACT_APP_PATH}/buildprofile`}
          element={<BuildProfile></BuildProfile>}
        ></Route>
        <Route
          path={`${process.env.REACT_APP_PATH}/profiles`}
          element={<Profiles></Profiles>}
        ></Route>
        <Route
          path={`${process.env.REACT_APP_PATH}/profiles/:profileIdInUrl`}
          element={<DetailedProfile></DetailedProfile>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      {isShown && <Modal />}
    </div>
  );
}

export default App;
