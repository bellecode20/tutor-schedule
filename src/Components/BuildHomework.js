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
    const writtenYet =
      homeworkStudentObj.homeworkStudent == "" ||
      homeworkDateObj.homeworkDate == "" ||
      homeworkInputObj.homeworkInput == "";
    if (!writtenYet) {
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
      console.log("h");
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
        <BiHome className="nav-btn" onClick={() => navigate("/")}></BiHome>
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
      {/* {modalShow == true && localStorage.getItem("profilesKey") == null ? (
        <div className="build-homework__modal">
          <div className="build-homework__modal__overlay"></div>
          <div className="build-homework__modal__content">
            <div className="build-homework__modal__icon">X</div>
            <div className="build-homework__modal__text">
              모든 항목을 작성해주세요
            </div>
            <button
              className="build-homework__modal__okBtn"
              onClick={displayModal}
            >
              Close
            </button>
          </div>
        </div>
      ) : null} */}
      {/* {localStorage.getItem("profilesKey") == null ||
      JSON.parse(localStorage.getItem("profilesKey")).length == 0 ? (
        <div className="modal-container">
          <div className="modal__overlay"></div>
          <div className="modal__content">
            <div className="modal__content__icon-wrap">
              <svg
                className="modal__content__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <path d="M38.654 44.556C39.638 43.114 43 4.568 43 4.166S40.294 0 32.996 0 22.01 3.446 22.01 3.446c-.247 1.442 4.673 40.23 5.985 41.59 1.312 1.363 9.675.963 10.66-.48zM25.002 4.648c.052-.397 4.387-2.564 8.24-2.324 3.855.24 7.504 2.604 7.545 3.005.04.4-.37 3.004-.492 2.924-.123-.08-6.355-4.608-6.642-4.568-.287.04-.78 1.042-.41 1.282.37.24 6.765 4.768 6.765 4.928 0 .16-.41 2.324-.41 2.324s-6.847-5.21-7.052-5.21c-.205 0-.615 1.123-.41 1.283.205.16 7.34 5.13 7.34 5.29 0 .16-.165 3.204-.288 3.204-.123 0-6.56-5.69-6.806-5.65-.246.04-.574 1.322-.37 1.442.206.12 7.135 5.85 7.258 6.13.123.28-.287 3.124-.287 3.124s-7.01-5.69-7.134-5.69c-.124 0-.493 1.282-.288 1.442.205.16 7.298 6.01 7.298 6.25s.123 2.846-.164 2.766c-.287-.08-6.314-5.13-6.6-5.13-.288 0-.698.963-.37 1.283.328.32 6.6 5.49 6.642 5.69.04.2-.246 3.566-.246 3.566s-5.904-6.25-6.068-6.25-.37 1.523-.123 1.683c.247.16 5.864 6.01 5.946 6.21.082.2-.164 2.325-.164 2.325s-5.043-4.928-5.207-4.928-.656 1.482-.533 1.603c.123.12 5.453 5.01 5.453 5.01l-.205 2.203-5.084-4.287s-.41 1.24-.328 1.44c.082.2 5.125 4.248 5.125 4.41 0 .16-.205 1.44-.328 1.48-.123.04-.82.24-1.107.12-.287-.12-3.24-2.684-3.362-2.644-.123.04-.492 1.042-.37 1.202.124.16 1.682 1.723 1.682 1.723s-2.952.16-3.157-.12c-.204-.277-5.575-36.338-5.288-38.542zm7.667 45.145c-3.635.253-8.005 2.46-7.955 7.505.05 5.046 3.915 6.482 6.508 6.673 2.593.193 8.973-.454 9.276-5.555.41-6.887-2.83-8.97-7.83-8.622zm-.988 11.89c-2.294 0-3.99-2.428-4.04-4.344-.05-1.917 1.347-4.727 5.187-4.855 1.744-.058 5.086-.156 5.086 5.173 0 3.646-3.94 4.024-6.234 4.024zm-.858-7.867c-1.696.575-1.895 3.32-1.696 4.343.2 1.02 1.397.83 1.646.638.25-.192 0-.32-.15-1.533-.15-1.214.997-2.62 1.197-2.81.2-.192-.457-.82-.996-.64z" />
              </svg>
            </div>
            <div className="modal__text--main">앗..</div>
            <div className="modal__text--sub">
              숙제를 낼 학생이 없어요. <br></br>학생을 추가해주세요.
            </div>
            <Link to="/buildprofile" className="modal__do-btn">
              <div>추가하기</div>
            </Link>
            <Link to="/" className="modal__cancel-btn">
              <div>홈으로</div>
            </Link>
          </div>
        </div>
      ) : null} */}
      {modalShow ? (
        <ErrorModal
          modalShow={modalShow}
          setModalShow={setModalShow}
          mainModalText={mainModalText}
          subModalText={subModalText}
        />
      ) : null}
    </div>
  );
};
export default BuildHomework;
