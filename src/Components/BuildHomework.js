import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BiHome, BiLeftArrowAlt, BiErrorCircle } from "react-icons/bi";
import ErrorModal from "./ErrorModal.js";
import "../Styles/BuildHomework.scss";
const BuildHomework = ({
  student,
  homework,
  setHomework,
  modalShow,
  setModalShow,
  mainModalText,
  setMainModalText,
  subModalText,
  setSubModalText,
}) => {
  console.log(homework);
  const navigate = useNavigate();
  const { clickedDate } = useParams();
  const [homeworkInfoObj, sethomeworkInfoObj] = useState();
  const [homeworkStudentValue, sethomeworkStudentValue] = useState("");
  const [homeworkStudentObj, sethomeworkStudentObj] = useState({});
  const selectStudentForhomework = (e) => {
    sethomeworkStudentValue(e.target.innerText);
  };
  useEffect(
    () => sethomeworkStudentObj({ homeworkStudent: homeworkStudentValue }),
    [homeworkStudentValue]
  );

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
  const homeworkDateChg = (e) => {
    sethomeworkDateValue(e.target.value);
  };
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

  const homeworkSave = (e) => {
    const getExistStu = () => {
      const existStuArr = homework.filter((el) => {
        return (
          el.homeworkDate == homeworkDateObj.homeworkDate &&
          el.homeworkStudent == homeworkStudentObj.homeworkStudent
        );
      });
      return existStuArr;
    };
    const existStuArr = getExistStu();
    const writtenYet =
      homeworkStudentObj.homeworkStudent == "" ||
      homeworkDateObj.homeworkDate == "" ||
      homeworkInputObj.homeworkInput == "";
    if (existStuArr.length > 0) {
      e.preventDefault();
      setMainModalText("existStuArr");
      setSubModalText("existStuArr");
      setModalShow(true);
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
      setMainModalText("successSaving");
      setSubModalText("successSaving");
      setModalShow(true);
    } else {
      e.preventDefault();
      setMainModalText("writtenYet");
      setSubModalText("writtenYet");
      setModalShow(true);
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
      JSON.parse(localStorage.getItem("profilesKey")).length == 0
    ) {
      setMainModalText("noStudentInHomework");
      setSubModalText("noStudentInHomework");
      setModalShow(true);
    }
  });

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
              {student.map((info, i) => (
                <div
                  className={
                    homeworkStudentObj.homeworkStudent == info.name
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
            <input
              className="homeworkForm__date__content"
              type="date"
              min="2020-01-01"
              value={homeworkDateValue}
              onChange={homeworkDateChg}
            ></input>
          </div>
          <div className="contentLine"></div>
          <div className="homeworkForm__homework">
            <p className="homeworkForm__homework__title">숙제</p>
            <input
              className="homeworkForm__homework__content"
              type="textarea"
              placeholder="단어 Day 1 ~ 2"
              value={homeworkInputValue}
              onChange={homeworkInputTextChg}
            ></input>
          </div>
          <div className="contentLine"></div>
        </div>
        <button className="homeworkForm__saveBtn" onClick={homeworkSave}>
          저장
        </button>
      </form>
      {modalShow && (
        <ErrorModal
          modalShow={modalShow}
          setModalShow={setModalShow}
          mainModalText={mainModalText}
          subModalText={subModalText}
        />
      )}
    </div>
  );
};
export default BuildHomework;
