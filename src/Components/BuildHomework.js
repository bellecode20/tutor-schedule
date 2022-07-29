import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiHome, BiLeftArrowAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleShowing, changeId } from "../features/modalSlice.js";
import "../Styles/BuildHomework.scss";
const BuildHomework = ({ student, homework, setHomework }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { clickedDate } = useParams();
  const [homeworkInfoObj, sethomeworkInfoObj] = useState();
  const [homeworkStudentValue, sethomeworkStudentValue] = useState("");
  const [homeworkStudentObj, sethomeworkStudentObj] = useState({});
  const selectStudentForhomework = (e) => {
    sethomeworkStudentValue(e.target.innerText);
  };
  useEffect(() => {
    // 학생이 한 명인 경우엔 자동으로 설정한다.
    if (getLessonDayStu().length == 1) {
      sethomeworkStudentObj({ homeworkStudent: getLessonDayStu()[0].name });
      return;
    }
    sethomeworkStudentObj({ homeworkStudent: homeworkStudentValue });
  }, [homeworkStudentValue]);

  //날짜의 기본 값은 유저가 캘린더에서 클릭한 날짜, 즉 주소창에 있는 날짜로 설정한다.
  const thisDayArrFromUrl = clickedDate
    .slice(1)
    .split("-")
    .map((dates) => (dates.length == 1 ? "0".concat(dates) : dates));
  const [homeworkDateValue, sethomeworkDateValue] = useState(
    `${thisDayArrFromUrl[0]}-${thisDayArrFromUrl[1]}-${thisDayArrFromUrl[2]}`
  );

  //유저가 입력한 날짜를 객체로 만든다.
  const [homeworkDateObj, sethomeworkDateObj] = useState({});
  useEffect(
    () => sethomeworkDateObj({ homeworkDate: homeworkDateValue }),
    [homeworkDateValue]
  );

  const [homeworkInputValue, sethomeworkInputValue] = useState("");
  const [homeworkInputObj, sethomeworkInputObj] = useState({});
  const homeworkInputTextChg = (e) => {
    sethomeworkInputValue(e.target.value);
  };
  useEffect(
    () => sethomeworkInputObj({ homeworkInput: homeworkInputValue }),
    [homeworkInputValue]
  );
  const getLessonDayStu = () => {
    const clickedDayNum = new Date(clickedDate.slice(1)).getDay();
    const lessonDayStu = student.filter((el) => {
      return el.days.includes(clickedDayNum);
    });
    return lessonDayStu;
  };
  const homeworkSave = (e) => {
    const getExistHomework = () => {
      const existHomework = homework.filter((el) => {
        return (
          el.homeworkDate == homeworkDateObj.homeworkDate &&
          el.homeworkStudent == homeworkStudentObj.homeworkStudent
        );
      });
      return existHomework;
    };
    const existHomework = getExistHomework();
    const writtenYet =
      homeworkStudentObj.homeworkStudent == "" ||
      homeworkDateObj.homeworkDate == "" ||
      homeworkInputObj.homeworkInput == "";
    if (existHomework.length > 0) {
      e.preventDefault();
      dispatch(toggleShowing());
      dispatch(changeId("existHomework"));
    } else if (!writtenYet) {
      const id = { id: new Date().valueOf() };
      //student에서 동일한 학생 이름을 찾아서, 그 때 고른 color 값으로 추가한다.
      const color = student.find(
        (el) => el.name == homeworkStudentObj.homeworkStudent
      ).color;
      const colorObj = { color: color };
      sethomeworkInfoObj({
        ...homeworkStudentObj,
        ...homeworkDateObj,
        ...homeworkInputObj,
        ...colorObj,
        ...id,
      });
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
    setHomework([...homework, homeworkInfoObj]);
  };

  useEffect(() => {
    localStorage.setItem("homeworksKey", JSON.stringify(homework));
  }, [homework]);

  //현재 저장한 학생이 0명일 때 모달 창 띄우기
  useEffect(() => {
    if (
      localStorage.getItem("profilesKey") == null ||
      JSON.parse(localStorage.getItem("profilesKey")).length == 0 ||
      getLessonDayStu().length == 0
    ) {
      dispatch(toggleShowing());
      dispatch(changeId("noStudentInHomework"));
    }
  }, []);
  return (
    <div className="build-homework">
      <div className="nav-btn--container">
        <BiLeftArrowAlt
          className="nav-btn"
          onClick={() => navigate(-1)}
        ></BiLeftArrowAlt>
        <BiHome
          className="nav-btn"
          onClick={() => navigate(process.env.REACT_APP_PATH)}
        ></BiHome>
      </div>
      <div className="page-title">숙제 추가</div>
      <div className="titleLine"></div>
      <form onSubmit={homeworkSubmit}>
        <div className="homeworkForm">
          <div className="homeworkForm__student">
            <p className="homeworkForm__student__title">학생</p>
            <div className="homeworkForm__student__names">
              {getLessonDayStu().map((info, i) => (
                <div
                  className={
                    homeworkStudentObj.homeworkStudent == info.name ||
                    getLessonDayStu().length == 1
                      ? `homework-form__student-name ${info.color} student-name--selected`
                      : `homework-form__student-name ${info.color} `
                  }
                  onClick={selectStudentForhomework}
                  key={i}
                >
                  {info.name}
                </div>
              ))}
            </div>
          </div>
          <div className="contentLine"></div>
          <div className="homeworkForm__date">
            <p className="homeworkForm__date__title">날짜</p>
            <div className="homeworkForm__date__content">
              {homeworkDateValue}
            </div>
          </div>
          <div className="contentLine"></div>
          <div className="homeworkForm__homework">
            <p className="homeworkForm__homework__title">숙제</p>
            <textarea
              className="homeworkForm__homework__content"
              type="textarea"
              placeholder="단어 Day 1 ~ 2"
              value={homeworkInputValue}
              onChange={homeworkInputTextChg}
            ></textarea>
          </div>
          <div className="contentLine"></div>
        </div>
        <button className="homeworkForm__saveBtn" onClick={homeworkSave}>
          저장
        </button>
      </form>
    </div>
  );
};
export default BuildHomework;
