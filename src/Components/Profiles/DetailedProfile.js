import React from "react";
import { useSelector } from "react-redux";
import { BiHome, BiLeftArrowAlt } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";
import "../../Styles/basic.scss";
import "../../Styles/Profiles.scss";
const DetailedProfile = () => {
  let profilesKey = useSelector((state) => state.profiles.profiles);
  const navigate = useNavigate();
  const { profileIdInUrl } = useParams();
  const profileId = profileIdInUrl.slice(1);
  const detailedStudent = profilesKey.find((el) => el.id == profileId);
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
                <div className="studentInfo__wage__result">
                  <div className="studentInfo__wage__p">
                    <span className="studentInfo__highlight studentInfo__padding">
                      전체
                    </span>
                    <span className="studentInfo__padding">
                      {detailedStudent.totalNum}회
                    </span>
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
