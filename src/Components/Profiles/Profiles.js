import React, { useState } from "react";
import {
  BiHome,
  BiLeftArrowAlt,
  BiCircle,
  BiCheckCircle,
} from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProfilesKey, setProfilesLS } from "../../features/profilesSlice";
import "../../Styles/basic.scss";
import "../../Styles/Profiles.scss";

const Profiles = () => {
  let profilesKey = useSelector((state) => state.profiles.profiles);
  const dispatch = useDispatch();
  const isShown = useSelector((state) => state.modal.isShown);
  const navigate = useNavigate();
  const [deleteState, setDeleteState] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [checkedProfile, setCheckedProfile] = useState(false);

  const displayCheckBtn = (info) => {
    if (deleteState == true && selectedDays.includes(info) == false) {
      return <BiCircle />;
    } else if (deleteState == true && selectedDays.includes(info)) {
      return <BiCheckCircle />;
    } else {
      return null;
    }
  };
  const studentInfoMap = profilesKey.map((info, i) => (
    <Link
      key={i}
      to={`${process.env.REACT_APP_PATH}/profiles/:${info.id}`}
      onClick={(e) => deleteState == true && e.preventDefault()}
    >
      <div className={`${info.color} profiles__profile`}>
        <p className="profiles__profile__name">{info.name}</p>
        <div
          className="propfiles__profile__deleteBtn"
          onClick={() => {
            profileOnClick(info);
            setCheckedProfile(!checkedProfile);
          }}
        >
          {displayCheckBtn(info)}
        </div>
      </div>
    </Link>
  ));

  const onDeleteMode = () => {
    setDeleteState(!deleteState);
    let daysAfterDelete = profilesKey.filter(
      (info) => !selectedDays.includes(info)
    );
    if (deleteState == true && isShown == false) {
      dispatch(setProfilesKey(daysAfterDelete));
      dispatch(setProfilesLS());
    }
  };

  const profileOnClick = (info) => {
    if (deleteState == true && selectedDays.includes(info) == false) {
      setSelectedDays([...selectedDays, info]);
    } else if (deleteState == true && selectedDays.includes(info) == true) {
      const filterUnChecked = selectedDays.filter((el) => el != info);
      setSelectedDays(filterUnChecked);
    } else {
    }
  };

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
        <div className="page-title">모든 프로필</div>
        <div className="titleLine"></div>
        <div className="profiles__students">{studentInfoMap}</div>
      </div>
    </div>
  );
};
export default Profiles;
