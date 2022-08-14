import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import "../../Styles/basic.scss";
import "../../Styles/Profiles.scss";
const DetailedProfile = () => {
  let profilesKey = useSelector((state) => state.profiles.profiles);
  const { profileIdInUrl } = useParams();
  const profileId = profileIdInUrl.slice(1);
  const detailedStudent = profilesKey.find((el) => el.id == profileId);
  const dayNumToText = () => {
    const sortedNum = detailedStudent.days.slice().sort((a, b) => a - b);
    return sortedNum.map((el) => {
      if (el == 0) return "일";
      else if (el == 1) return "월";
      else if (el == 2) return "화";
      else if (el == 3) return "수";
      else if (el == 4) return "목";
      else if (el == 5) return "금";
      else if (el == 6) return "토";
    });
  };
  return (
    <Layout>
      <div className="page-title">상세 프로필</div>
      <div className="titleLine"></div>
      <div className="studentInfo">
        <div className="studentInfo--bttm">
          <div className="studentInfo__name">
            <p className="studentInfo__name__title">이름</p>
            {detailedStudent.name}
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
              {dayNumToText().map((el, i) => (
                <div className="dayLabel__Div" key={i}>
                  {el}
                </div>
              ))}
            </div>
          </div>
          <div className="contentLine"></div>
          <div className="studentInfo__color">
            <p className="studentInfo__color__title">배경색</p>
            <div
              className={`${detailedStudent.color} studentInfo__color__content`}
            ></div>
          </div>
          <div className="contentLine"></div>
          <div className="studentInfo__memo">
            <p className="studentInfo__memo__title">메모</p>
            <div>{detailedStudent.memo}</div>
          </div>
          <div className="contentLine"></div>
        </div>
      </div>
    </Layout>
  );
};
export default DetailedProfile;
