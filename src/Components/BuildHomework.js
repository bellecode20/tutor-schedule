import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowing, changeId } from "../features/modalSlice.js";
import { setProfilesKey, setProfilesLS } from "../features/profilesSlice";
import NavBar from "./NavBar.js";
import Layout from "./Layout.js";
import "../Styles/BuildHomework.scss";
const BuildHomework = ({ homework, setHomework }) => {
  let profilesKey = useSelector((state) => state.profiles.profiles);
  const dispatch = useDispatch();
  const { clickedDate } = useParams();
  const [newHomework, setNewHomework] = useState({
    homeworkStudent: "",
    homeworkDate: clickedDate,
    homeworkInput: "",
  });

  const changeNewHomework = (e) => {
    setNewHomework({ ...newHomework, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("homeworksKey", JSON.stringify(homework));
  }, [homework]);

  //현재 저장한 학생이 0명일 때 모달 창 띄우기
  useEffect(() => {
    if (profilesKey == null || profilesKey.length == 0) {
      dispatch(toggleShowing());
      dispatch(changeId("noStudentInHomework"));
    } else if (profilesKey.length == 1) {
      setNewHomework({ ...newHomework, homeworkStudent: profilesKey[0].name });
      return;
    }
  }, []);
  const checkIsExtra = () => {
    // 선택한 날짜가 수업하는 요일인지 체크한다.
    // 만약 수업하는 요일이 아니라면 학생 프로필에 extraLesson키에도 수업날짜를 추가할 것이다.
    let selectedStu = profilesKey.filter(
      (el) => el.name == newHomework.homeworkStudent
    )[0];
    const clickedlessonDay = new Date(newHomework.homeworkDate).getDay();
    if (selectedStu.days.includes(clickedlessonDay)) return; // 수업하는 요일이라면 종료한다.
    // 수업하는 요일이 아닌 경우이다. 선택한 학생 extraLesson에 선택한 날짜 string을 추가한다.
    const updatedStudents = profilesKey.map((el) => {
      if (el == selectedStu) {
        let updatedExtra = [...selectedStu.extraLesson];
        updatedExtra.push(newHomework.homeworkDate);
        return {
          ...selectedStu,
          ...{
            extraLesson: updatedExtra,
          },
        };
      } else return el;
    });
    dispatch(setProfilesKey(updatedStudents));
    dispatch(setProfilesLS());
  };
  const homeworkSave = (e) => {
    const getExistHomework = () => {
      const existHomework = homework.filter((el) => {
        return (
          el.homeworkDate == newHomework.homeworkDate &&
          el.homeworkStudent == newHomework.homeworkStudent
        );
      });
      return existHomework;
    };
    const writtenYet =
      newHomework.homeworkStudent == "" ||
      newHomework.homeworkDate == "" ||
      newHomework.homeworkInput == "";
    //이미 작성한 숙제가 있는 경우엔 모달창을 띄운다.
    if (getExistHomework().length > 0) {
      e.preventDefault();
      dispatch(toggleShowing());
      dispatch(changeId("existHomework"));
    } else if (!writtenYet) {
      //작성을 다 한 경우이다.
      const id = { id: new Date().valueOf() };
      //student에서 동일한 학생 이름을 찾아서, 그 때 고른 color 값으로 추가한다.
      const color = profilesKey.find(
        (el) => el.name == newHomework.homeworkStudent
      ).color;
      const colorObj = { color: color };
      // setNewHomework({ ...newHomework, ...colorObj, ...id });
      checkIsExtra(); // 학생도 추가한다.
      dispatch(toggleShowing());
      dispatch(changeId("successSaving"));
    } else {
      e.preventDefault();
      dispatch(toggleShowing());
      dispatch(changeId("writtenYet"));
    }
  };

  const homeworkSubmit = (e) => {
    e.preventDefault();
    setHomework([...homework, newHomework]);
  };

  return (
    <Layout>
      <div className="page-title">숙제 추가</div>
      <div className="titleLine"></div>
      <form onSubmit={homeworkSubmit}>
        <div className="homeworkForm">
          <div className="homeworkForm__student">
            <p className="homeworkForm__student__title">학생</p>
            <div className="homeworkForm__student__names">
              {profilesKey &&
                profilesKey.map((info, i) => (
                  <label
                    className={
                      newHomework.homeworkStudent == info.name ||
                      profilesKey.length == 1
                        ? `homework-form__student-name ${info.color} student-name--selected`
                        : `homework-form__student-name ${info.color} `
                    }
                    key={i}
                  >
                    <input
                      type="radio"
                      name="homeworkStudent"
                      onChange={changeNewHomework}
                      value={info.name}
                      checked={i == 0 && profilesKey.length == 1 && true}
                    />
                    {info.name}
                  </label>
                ))}
            </div>
          </div>
          <div className="contentLine"></div>
          <div className="homeworkForm__date">
            <p className="homeworkForm__date__title">날짜</p>
            <div className="homeworkForm__date__content">
              {newHomework.homeworkDate}
            </div>
          </div>
          <div className="contentLine"></div>
          <div className="homeworkForm__homework">
            <p className="homeworkForm__homework__title">숙제</p>
            <textarea
              className="homeworkForm__homework__content"
              type="textarea"
              placeholder="단어 Day 1 ~ 2"
              name="homeworkInput"
              value={newHomework.homework}
              onChange={changeNewHomework}
            ></textarea>
          </div>
          <div className="contentLine"></div>
        </div>
        <button className="homeworkForm__saveBtn" onClick={homeworkSave}>
          저장
        </button>
      </form>
    </Layout>
  );
};

export default BuildHomework;
