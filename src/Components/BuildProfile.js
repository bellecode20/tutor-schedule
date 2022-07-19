import React, { useEffect, useState } from "react";
import { BiHome, BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ErrorModal from "./ErrorModal.js";
import "../Styles/basic.scss";
import "../Styles/buildProfile.scss";

const BuildProfile = ({
  student,
  setStudent,
  modalShow,
  setModalShow,
  mainModalText,
  setMainModalText,
  subModalText,
  setSubModalText,
}) => {
  const navigate = useNavigate();
  //요일 map
  const colorMapArr = [
    "pinkCoral",
    "lightPink",
    "deepYellow",
    "lightYellow",
    "lightGreen",
    "fluorescentGreen",
    "lightblue",
    "deepblue",
    "pastelPurple",
  ];
  const dayMapArr = ["일", "월", "화", "수", "목", "금", "토"];
  const [allValues, setAllValues] = useState({
    name: "",
    wage: "",
    onWeek: "",
    hour: "",
    totalNum: "",
    firstDate: `${new Date().toISOString().substring(0, 10)}`,
    days: "",
    color: "",
    memo: "",
  });
  useEffect(() => {
    localStorage.setItem("profilesKey", JSON.stringify(student));
  }, [student]);

  const changeHandler = (e) => {
    if (e.target.name == "days") {
      let checked = e.target.checked;
      let daysNewValue;
      if (checked) {
        daysNewValue = [...allValues.days, Number(e.target.value)];
      } else {
        daysNewValue = allValues.days.filter((el) => el != e.target.value);
      }
      setAllValues({
        ...allValues,
        [e.target.name]: daysNewValue,
      });
      return;
    } else if (
      e.target.name == "hour" ||
      e.target.name == "wage" ||
      e.target.name == "onWeek" ||
      e.target.name == "totalNum"
    ) {
      setAllValues({
        ...allValues,
        [e.target.name]: parseInt(e.target.value),
      });
      return;
    }
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  // 저장 버튼을 눌렀을 때, 프로필을 다 작성했다면 실행된다.
  const profileSave = (e) => {
    const writtenYet = () => {
      for (let x in allValues) {
        // 모두 작성하지 않았다면 writtenYet이 true임을 반환한다.
        if (x == "memo") continue; // memo는 작성하지 않아도 된다.
        if (allValues[x] == "") return true;
      }
      return false;
    };
    //프로필을 다 작성하지 않았을 때 혹은 이름이 중복될때 저장하지 않고 모달창을 띄운다.
    const existedProfiles = JSON.parse(localStorage.getItem("profilesKey"));
    if (
      allValues.name != "" &&
      existedProfiles.filter((el) => el.name == allValues.name).length >= 1
    ) {
      e.preventDefault();
      setModalShow(true);
      setMainModalText("sameName");
      setSubModalText("sameName");
    } else if (writtenYet()) {
      e.preventDefault();
      setModalShow(true);
      setMainModalText("writtenYet");
      setSubModalText("writtenYet");
    } else if (!writtenYet()) {
      //profileObj에 id를 추가한다.
      const id = { id: new Date().valueOf() };
      const profileObjWithId = { ...allValues, ...id };
      //id까지 추가된 profileObj로 student바꾸기
      setStudent([...student, profileObjWithId]);
      setModalShow(true);
      setMainModalText("successSaving");
      setSubModalText("successSaving");
    }
  };
  const profileSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="build-profile">
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
      <div className="page-title">학생 추가</div>
      <div className="titleLine"></div>
      <form onSubmit={profileSubmit}>
        <div className="studentInfo">
          <div className="studentInfo--bttm">
            <div className="studentInfo__name">
              <p className="studentInfo__name__title">이름</p>
              <input
                className="studentInfo__name__content"
                type="text"
                name="name"
                placeholder="이수민"
                onChange={changeHandler}
              ></input>
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__wage">
              <p className="studentInfo__wage__title">수업료</p>
              <div className="studentInfo__wage__content">
                <div className="studentInfo__wage__args">
                  <div className="studentInfo__wage__p">
                    <span className="studentInfo__highlight">시급</span>
                    <input
                      type="number"
                      name="wage"
                      placeholder="2"
                      onChange={changeHandler}
                    ></input>
                    만원
                  </div>
                  <div className="studentInfo__wage__args__onweek">
                    <div className="studentInfo__wage__p">
                      <span className="studentInfo__highlight">횟수</span>
                      <span className="studentInfo__margin">
                        <input
                          type="number"
                          name="hour"
                          placeholder="2"
                          onChange={changeHandler}
                        ></input>
                        시간씩
                      </span>
                    </div>
                    <div className="studentInfo__wage__p">
                      주
                      <input
                        type="number"
                        name="onWeek"
                        placeholder="2"
                        onChange={changeHandler}
                      ></input>
                      회
                    </div>
                  </div>
                </div>
                <div className="studentInfo__wage__result">
                  <div className="studentInfo__wage__p">
                    <span className="studentInfo__highlight">전체</span>
                    <span className="studentInfo__margin">
                      <input
                        type="number"
                        name="totalNum"
                        placeholder="8"
                        onChange={changeHandler}
                      ></input>
                      회
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__first-date">
              <p className="studentInfo__first-date__title">시작일</p>
              <input
                className="studentInfo__first-date__content"
                type="date"
                name="firstDate"
                value={allValues.firstDate}
                onChange={changeHandler}
              ></input>
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__days">
              <p className="studentInfo__days__title">요일</p>
              <div className="studentInfo__days__content">
                {dayMapArr.map((el, i) => (
                  <div key={i}>
                    <input
                      type="checkbox"
                      name="days"
                      id={`dayChoice${i}`}
                      value={i}
                      onClick={changeHandler}
                    ></input>
                    <label htmlFor={`dayChoice${i}`}>
                      <div
                        className={
                          allValues.days.includes(i)
                            ? "dayLabel__Div dayChecked"
                            : "dayLabel__Div"
                        }
                      >
                        {el}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__color">
              <p className="studentInfo__color__title">배경색</p>
              <div className="studentInfo__color__inputContainer">
                {colorMapArr.map((el, i) => (
                  <div key={i}>
                    <input
                      type="radio"
                      className="colorInput"
                      name="color"
                      id={`colorChoice${i}`}
                      value={el}
                      onClick={changeHandler}
                    ></input>
                    <label className="colorLabel" htmlFor={`colorChoice${i}`}>
                      <div
                        className={
                          allValues.color == el
                            ? `colorLabelDiv ${el} colorLabelDarker`
                            : `colorLabelDiv ${el}`
                        }
                      ></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__memo">
              <p className="studentInfo__memo__title">메모</p>
              <input
                className="studentInfo__memo__content"
                type="text"
                name="memo"
                placeholder="특이사항"
                onChange={changeHandler}
              ></input>
            </div>
            <div className="contentLine"></div>
          </div>
        </div>
        <button className="buildProfileSaveBtn" onClick={profileSave}>
          저장
        </button>
      </form>
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
export default BuildProfile;
