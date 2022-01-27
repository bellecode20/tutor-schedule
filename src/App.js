import React, { useState } from "react";
import "./Styles/reset.scss";
import "./App.scss";
import "./Styles/_mediaQuery.scss";
import { Route, Routes } from "react-router-dom";
import Calendar from "./Components/Calendar.js";
import BuildHomework from "./Components/BuildHomework";
import BuildProfile from "./Components/BuildProfile";
import Profiles from "./Components/Profiles";
import DetailedProfile from "./Components/DetailedProfile";
import NotFound from "./Components/NotFound";
import ErrorModal from "./Components/ErrorModal.js";

function App() {
  //modal상태들
  const [modalShow, setModalShow] = useState(false);
  const [completeModalShow, setCompleteModalShow] = useState(false);
  const [savedModalShow, setSavedModalShow] = useState(false);
  const [mainModalText, setMainModalText] = useState("writtenYet");
  const [subModalText, setSubModalText] = useState("writtenYet");
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
          path="tutor-schedule"
          element={
            <Calendar
              student={student}
              homework={homeworkInfo}
              setHomework={setHomeworkInfo}
            />
          }
        ></Route>
        <Route
          path="/homeworkview/:clickedDate"
          element={
            <BuildHomework
              student={student}
              homework={homeworkInfo}
              setHomework={setHomeworkInfo}
              modalShow={modalShow}
              setModalShow={setModalShow}
              mainModalText={mainModalText}
              setMainModalText={setMainModalText}
              subModalText={subModalText}
              setSubModalText={setSubModalText}
            ></BuildHomework>
          }
        ></Route>
        <Route
          path="/buildprofile"
          element={
            <BuildProfile
              student={student}
              setStudent={setStudent}
              modalShow={modalShow}
              setModalShow={setModalShow}
              mainModalText={mainModalText}
              setMainModalText={setMainModalText}
              subModalText={subModalText}
              setSubModalText={setSubModalText}
            ></BuildProfile>
          }
        ></Route>
        <Route
          path="/profiles"
          element={
            <Profiles
              student={student}
              setStudent={setStudent}
              // HomeRoundedIcon={HomeRoundedIcon}
              modalShow={modalShow}
              setModalShow={setModalShow}
              mainModalText={mainModalText}
              setMainModalText={setMainModalText}
              subModalText={subModalText}
              setSubModalText={setSubModalText}
            ></Profiles>
          }
        ></Route>
        <Route
          path="/profiles/:profileIdInUrl"
          element={
            <DetailedProfile
              student={student}
              setStudent={setStudent}
              // HomeRoundedIcon={HomeRoundedIcon}
            ></DetailedProfile>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;