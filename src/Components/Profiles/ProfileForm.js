import React from "react";
import Layout from "../Layout";
import "../../Styles/tutorial.module.scss";
import "../../Styles/profileForm.scss";
const ProfileForm = ({
  changeHandler,
  profileSubmit,
  profileSave,
  colorMapArr,
  dayMapArr,
  allValues,
}) => {
  return (
    <Layout>
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
                        {dayMapArr[i]}
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
                      value={el.value}
                      onClick={changeHandler}
                    ></input>
                    <label className="colorLabel" htmlFor={`colorChoice${i}`}>
                      <div
                        className={
                          allValues.color == el.value
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
    </Layout>
  );
};
export default ProfileForm;
