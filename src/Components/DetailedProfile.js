import React, { useEffect } from "react";
import { useState } from "react";
import "../Styles/basic.scss";
import "../Styles/Profiles.scss";
// import { Button } from "@material-ui/core";
import { BiHome, BiLeftArrowAlt } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";

const DetailedProfile = ({ student, setStudent, HomeRoundedIcon }) => {
  const navigate = useNavigate();
  const studentInfoMap = student.map((info, i) => (
    <div key={i} className={`${info.color} profiles__profile`}>
      <p className="profiles__profile__name">{info.name}</p>
      <div
        className="propfiles__profile__deleteBtn"
        onClick={() => {
          profileOnClick(info);
        }}
      >
        X
      </div>
    </div>
  ));
  let [deleteState, setDeleteState] = useState(false);
  let [selectedDays, setSelectedDays] = useState([]);

  const onDeleteMode = () => {
    setDeleteState(!deleteState);
    if (deleteState == true) {
      let daysAfterDelete = student.filter(
        (info) => !selectedDays.includes(info)
      );
      setStudent(daysAfterDelete);
    }
  };
  useEffect(() => {
    localStorage.setItem("profilesKey", JSON.stringify(student));
  }, [student]);

  const profileOnClick = (info) => {
    if (deleteState == true) {
      setSelectedDays([...selectedDays, info]);
    }
  };

  //시작
  const { profileIdInUrl } = useParams();
  const profileId = profileIdInUrl.slice(1);
  const detailedStudent = student.find((el) => el.id == profileId);
  return (
    <div className="Profiles">
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
      <div className="profiles__main">
        <div>
          <div
            className="profiles__deleteBtn"
            onClick={() => {
              onDeleteMode();
            }}
          >
            {deleteState ? <h1>완료</h1> : <h1>삭제</h1>}
          </div>
        </div>
        <div className="page-title">상세 프로필</div>
        <div className="titleLine"></div>
        <div className="studentInfo">
          <div className="studentInfo--bttm">
            <div className="studentInfo__name">
              <p className="studentInfo__name__title">이름</p>
              {detailedStudent.name}
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__school">
              <p className="studentInfo__school__title">학교</p>
              {detailedStudent.school}
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__age">
              <p className="studentInfo__age__title">나이</p>
              {detailedStudent.age}
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__wage">
              <p className="studentInfo__wage__title">수업료</p>
              <div className="studentInfo__wage__content">
                <div className="studentInfo__wage__args">
                  <div className="studentInfo__wage__p">
                    <span className="studentInfo__highlight studentInfo__padding">
                      시급
                    </span>
                    {detailedStudent.wage}
                    만원
                  </div>
                  <div className="studentInfo__wage__args__onweek">
                    <span className="studentInfo__highlight studentInfo__padding">
                      횟수
                    </span>
                    <div className="studentInfo__wage__p">
                      <span className="studentInfo__padding">
                        {detailedStudent.hour}
                        시간씩
                      </span>
                    </div>
                    <div className="studentInfo__wage__p">
                      주{detailedStudent.onWeek}회
                    </div>
                  </div>
                </div>
                <div className="studentInfo__wage__result">
                  <div className="studentInfo__wage__p">
                    <span className="studentInfo__highlight studentInfo__padding">
                      전체
                    </span>
                    <span className="studentInfo__padding">
                      {detailedStudent.totalNum}회
                    </span>
                  </div>
                  <div className="studentInfo__wage__p">
                    {detailedStudent.totalWage}
                    만원
                  </div>
                </div>
              </div>
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__first-date">
              <p className="studentInfo__first-date__title">시작일</p>
              {detailedStudent.firstDate}
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__days">
              <p className="studentInfo__days__title">요일</p>
              <div className="studentInfo__days__content">
                <div>{detailedStudent.days}</div>
              </div>
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__color">
              <p className="studentInfo__color__title">배경색</p>
              <div>{detailedStudent.color}</div>
            </div>
            <div className="contentLine"></div>
            <div className="studentInfo__memo">
              <p className="studentInfo__memo__title">메모</p>
              <div>{detailedStudent.memo}</div>
            </div>
            <div className="contentLine"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailedProfile;
