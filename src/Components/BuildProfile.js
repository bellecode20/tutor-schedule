import { write } from "fs";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { BiHome, BiLeftArrowAlt } from "react-icons/bi";
import "../Styles/basic.scss";
import "../Styles/buildProfile.scss";
import { useNavigate } from "react-router-dom";
import ErrorModal from "./ErrorModal.js";

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
  //학교 인풋값을 객체로 만든다.
  const [schoolValue, setSchoolValue] = useState("");
  let [schoolObj, setSchoolObj] = useState({ school: "" });
  const schoolChg = (e) => {
    setSchoolValue(e.target.value);
  };
  useEffect(() => setSchoolObj({ school: schoolValue }), [schoolValue]);

  //이름 인풋값을 객체로 만든다.
  const [nameValue, setNameValue] = useState("");
  let [nameObj, setNameObj] = useState({ name: "" });
  const nameChg = (e) => {
    setNameValue(e.target.value);
  };
  useEffect(() => setNameObj({ name: nameValue }), [nameValue]);

  //나이 인풋값을 객체로 만든다.
  const [ageValue, setAgeValue] = useState("");
  let [ageObj, setAgeObj] = useState({ age: "" });
  const ageChg = (e) => {
    setAgeValue(parseInt(e.target.value));
  };
  useEffect(() => setAgeObj({ age: ageValue }), [ageValue]);

  //시급 인풋값을 객체로 만든다.
  const [wageValue, setWageValue] = useState("");
  let [wageObj, setWageObj] = useState({ wage: "" });
  const wageChg = (e) => {
    setWageValue(parseInt(e.target.value));
  };
  useEffect(() => setWageObj({ wage: wageValue }), [wageValue]);

  //주 00회 값을 객체로 만든다.
  const [onWeekValue, setOnWeekValue] = useState("");
  let [onWeekObj, setOnWeekObj] = useState({ wage: "" });
  const onWeekChg = (e) => {
    setOnWeekValue(parseInt(e.target.value));
  };
  useEffect(() => setOnWeekObj({ onWeek: onWeekValue }), [onWeekValue]);

  //주에 몇시간인지 값을 객체로 만든다.
  const [hourValue, setHourValue] = useState("");
  let [hourObj, setHourObj] = useState({ wage: "" });
  const hourChg = (e) => {
    setHourValue(parseInt(e.target.value));
  };
  useEffect(() => setHourObj({ hour: hourValue }), [hourValue]);

  //총 몇회인지 값을 객체로 만든다.
  const [totalNumValue, setTotalNumValue] = useState("");
  let [totalNumObj, setTotalNumObj] = useState({ wage: "" });
  const totalNumChg = (e) => {
    setTotalNumValue(parseInt(e.target.value));
  };
  useEffect(() => setTotalNumObj({ totalNum: totalNumValue }), [totalNumValue]);

  //총 월급이 얼마인지 값을 객체로 만든다.
  const [totalWageValue, setTotalWageValue] = useState("");
  let [totalWageObj, setTotalWageObj] = useState({ wage: "" });
  const totalWageChg = (e) => {
    setTotalWageValue(parseInt(e.target.value));
  };
  useEffect(
    () => setTotalWageObj({ totalWage: totalWageValue }),
    [totalWageValue]
  );

  //수업 시작일 값을 객체로 만든다.
  const [firstDateValue, setFirstDateValue] = useState(
    `${new Date().toISOString().substring(0, 10)}`
  );

  let [firstDateObj, setFirstDateObj] = useState({ wage: "" });
  const firstDateChg = (e) => {
    setFirstDateValue(e.target.value);
  };
  useEffect(
    () => setFirstDateObj({ firstDate: firstDateValue }),
    [firstDateValue]
  );

  //요일 map
  const [dayMapArr, setDayMapArr] = useState([
    {
      id: "dayChoice1",
      value: 1,
      text: "월",
    },
    {
      id: "dayChoice2",
      value: 2,
      text: "화",
    },
    {
      id: "dayChoice3",
      value: 3,
      text: "수",
    },
    {
      id: "dayChoice4",
      value: 4,
      text: "목",
    },
    {
      id: "dayChoice5",
      value: 5,
      text: "금",
    },
    {
      id: "dayChoice6",
      value: 6,
      text: "토",
    },
    {
      id: "dayChoice0",
      value: 0,
      text: "일",
    },
  ]);
  //요일 값을 객체로 만들 것이다.
  const [dayValue, setDayValue] = useState([]);
  let [dayObj, setDayObj] = useState({ days: "" });
  useEffect(() => setDayObj({ days: dayValue }), [dayValue]);

  //요일 체크박스에 체크된 것들만 모은다.
  const dayOnClick = (e) => {
    let checked = e.target.checked;
    if (checked) {
      setDayValue([...dayValue, Number(e.target.value)]);
    } else {
      setDayValue(dayValue.filter((el) => el != e.target.value));
    }
  };

  //색깔 map을 위한 useState을 만든다.
  const [colorMapArr, setColorMapArr] = useState([
    {
      id: "colorChoice0",
      value: "pinkCoral",
    },
    {
      id: "colorChoice1",
      value: "lightPink",
    },
    {
      id: "colorChoice2",
      value: "deepYellow",
    },
    {
      id: "colorChoice3",
      value: "lightYellow",
    },
    {
      id: "colorChoice4",
      value: "lightGreen",
    },
    {
      id: "colorChoice5",
      value: "fluorescentGreen",
    },
    {
      id: "colorChoice6",
      value: "lightblue",
    },
    {
      id: "colorChoice7",
      value: "deepblue",
    },
    {
      id: "colorChoice8",
      value: "pastelPurple",
    },
  ]);

  //색깔 값을 객체로 만든다.
  const [colorObj, setColorObj] = useState({ color: "" });
  const colorOnClick = (e) => {
    setColorObj({ color: e.target.value });
  };

  // 메모 값을 객체로 만든다.
  const [memoValue, setMemoValue] = useState("");
  let [memoObj, setMemoObj] = useState({ memo: "" });
  const memoChg = (e) => {
    setMemoValue(e.target.value);
  };
  useEffect(() => setMemoObj({ memo: memoValue }), [memoValue]);

  // 지금까지 입력한 input객체들을 모두 모아 하나의 객체로 만들어준다.
  const profileObj = {
    ...nameObj,
    ...schoolObj,
    ...ageObj,
    ...wageObj,
    ...onWeekObj,
    ...hourObj,
    ...totalNumObj,
    ...totalWageObj,
    ...firstDateObj,
    ...colorObj,
    ...memoObj,
    ...dayObj,
  };

  useEffect(() => {
    localStorage.setItem("profilesKey", JSON.stringify(student));
  }, [student]);

  // 저장 버튼을 눌렀을 때, 프로필을 다 작성했다면 실행된다.
  const profileSave = (e) => {
    const writtenYet =
      profileObj.name == "" ||
      profileObj.school == "" ||
      profileObj.age == "" ||
      profileObj.wage == "" ||
      profileObj.onWeek == "" ||
      profileObj.totalNum == "" ||
      profileObj.totalWage == "" ||
      profileObj.firstDate == "" ||
      profileObj.colorObj == "" ||
      profileObj.dayObj == "";

    //프로필을 다 작성하지 않았을 때 혹은 이름이 중복될때 저장하지 않고 모달창을 띄운다.
    const 프로필배열 = JSON.parse(localStorage.getItem("profilesKey"));
    if (
      profileObj.name != "" &&
      프로필배열.filter((el) => el.name == profileObj.name).length >= 1
    ) {
      e.preventDefault();
      setMainModalText("sameName");
      setSubModalText("sameName");
      setModalShow(true);
    } else if (writtenYet) {
      e.preventDefault();
      setMainModalText("writtenYet");
      setSubModalText("writtenYet");
      setModalShow(true);
    } else if (!writtenYet) {
      //profileObj에 id를 추가한다.
      const id = { id: new Date().valueOf() };
      const profileObjWithId = { ...profileObj, ...id };
      //id까지 추가된 profileObj로 student바꾸기
      setStudent([...student, profileObjWithId]);
      setMainModalText("successSaving");
      setSubModalText("successSaving");
      setModalShow(true);
    }
  };
  const profileSubmit = (e) => {
    e.preventDefault();
    setSchoolValue("");
    setNameValue("");
    setAgeValue("");
    setOnWeekValue("");
    setHourValue("");
    setTotalNumValue("");
    setTotalWageValue("");
    setFirstDateValue("");
    setMemoValue("");
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
                placeholder="이수민"
                value={nameValue}
                onChange={nameChg}
              ></input>
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__school">
              <p className="studentInfo__school__title">학교</p>
              <input
                className="studentInfo__school__content"
                type="text"
                placeholder="한국고등학교"
                value={schoolValue}
                onChange={schoolChg}
              ></input>
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__age">
              <p className="studentInfo__age__title">나이</p>
              <input
                className="studentInfo__age__content"
                type="number"
                placeholder="17"
                value={ageValue}
                onChange={ageChg}
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
                      placeholder="2"
                      value={wageValue}
                      onChange={wageChg}
                    ></input>
                    만원
                  </div>
                  <div className="studentInfo__wage__args__onweek">
                    <div className="studentInfo__wage__p">
                      <span className="studentInfo__highlight">횟수</span>
                      <span className="studentInfo__margin">
                        <input
                          type="number"
                          placeholder="2"
                          value={hourValue}
                          onChange={hourChg}
                        ></input>
                        시간씩
                      </span>
                    </div>
                    <div className="studentInfo__wage__p">
                      주
                      <input
                        type="number"
                        placeholder="2"
                        value={onWeekValue}
                        onChange={onWeekChg}
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
                        placeholder="8"
                        value={totalNumValue}
                        onChange={totalNumChg}
                      ></input>
                      회
                    </span>
                  </div>
                  <div className="studentInfo__wage__p">
                    <input
                      type="number"
                      placeholder="32"
                      value={totalWageValue}
                      onChange={totalWageChg}
                    ></input>
                    만원
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
                value={firstDateValue}
                onChange={firstDateChg}
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
                      id={el.id}
                      name="daysInput"
                      value={el.value}
                      onClick={dayOnClick}
                    ></input>
                    <label htmlFor={el.id}>
                      <div
                        className={
                          dayValue.includes(el.value)
                            ? "dayLabel__Div dayChecked"
                            : "dayLabel__Div"
                        }
                      >
                        {el.text}
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
                      id={el.id}
                      name="daysInput"
                      value={el.value}
                      onClick={colorOnClick}
                    ></input>
                    <label className="colorLabel" htmlFor={el.id}>
                      <div
                        className={
                          colorObj.color == el.value
                            ? `colorLabelDiv ${el.value} colorLabelDarker`
                            : `colorLabelDiv ${el.value}`
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
                placeholder="특이사항"
                value={memoValue}
                onChange={memoChg}
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
