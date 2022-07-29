import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "./Components/Calendar.js";
import BuildHomework from "./Components/BuildHomework";
import BuildProfile from "./Components/Profiles/BuildProfile";
import Profiles from "./Components/Profiles/Profiles";
import DetailedProfile from "./Components/Profiles/DetailedProfile";
import NotFound from "./Components/NotFound";
import Modal from "./Components/Modal";
import "./Styles/reset.scss";
import "./App.scss";
import "./Styles/_mediaQuery.scss";
function App() {
  const dispatch = useDispatch();
  const isShown = useSelector((state) => state.modal.isShown);
  const [student, setStudent] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("profilesKey");
      if (saved !== null) {
        return JSON.parse(saved);
      } else {
        return [];
      }
    }
  });
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
            <Calendar
              student={student}
              homework={homeworkInfo}
              setHomework={setHomeworkInfo}
            />
          }
        ></Route>
        <Route
          path={`${process.env.REACT_APP_PATH}/homeworkview/:clickedDate`}
          element={
            <BuildHomework
              student={student}
              homework={homeworkInfo}
              setHomework={setHomeworkInfo}
            ></BuildHomework>
          }
        ></Route>
        <Route
          path={`${process.env.REACT_APP_PATH}/buildprofile`}
          element={
            <BuildProfile
              student={student}
              setStudent={setStudent}
            ></BuildProfile>
          }
        ></Route>
        <Route
          path={`${process.env.REACT_APP_PATH}/profiles`}
          element={
            <Profiles student={student} setStudent={setStudent}></Profiles>
          }
        ></Route>
        <Route
          path={`${process.env.REACT_APP_PATH}/profiles/:profileIdInUrl`}
          element={
            <DetailedProfile
              student={student}
              setStudent={setStudent}
            ></DetailedProfile>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      {isShown && <Modal />}
    </div>
  );
}

export default App;
