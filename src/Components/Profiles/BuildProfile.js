import React, { useState } from "react";
import TutorialForm from "./TutorialForm.js";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowing, changeId } from "../../features/modalSlice.js";
import ProfileForm from "./ProfileForm.js";
import { setProfilesKey, setProfilesLS } from "../../features/profilesSlice";
const BuildProfile = () => {
  const profilesKey = useSelector((state) => state.profiles.profiles);
  const dispatch = useDispatch();
  const colorMapArr = [
    { value: "pinkCoral", name: "코랄 핑크" },
    { value: "lightPink", name: "라이트 핑크" },
    { value: "deepYellow", name: "옐로우" },
    { value: "lightYellow", name: "레몬" },
    { value: "lightGreen", name: "라이트 그린" },
    { value: "fluorescentGreen", name: "그링키" },
    { value: "lightblue", name: "스카이" },
    { value: "deepblue", name: "펄 블루" },
    { value: "pastelPurple", name: "라벤더" },
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
    extraLesson: [],
  });

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
        if (x == "extraLesson") continue; // extraLesson는 작성하지 않아도 된다.
        if (allValues[x] == "") return true;
      }
      return false;
    };
    if (
      allValues.name != "" &&
      profilesKey.filter((el) => el.name == allValues.name).length >= 1
    ) {
      e.preventDefault();
      dispatch(toggleShowing());
      dispatch(changeId("sameName"));
    } else if (writtenYet()) {
      e.preventDefault();
      dispatch(toggleShowing());
      dispatch(changeId("writtenYet"));
    } else if (!writtenYet()) {
      //profileObj에 id를 추가한다.
      const id = { id: new Date().valueOf() };
      const profileObjWithId = { ...allValues, ...id };
      //id까지 추가된 profileObj로 student바꾸기
      dispatch(setProfilesKey([...profilesKey, profileObjWithId]));
      dispatch(setProfilesLS());
      dispatch(toggleShowing());
      dispatch(changeId("successSaving"));
    }
  };
  const profileSubmit = (e) => {
    e.preventDefault();
  };
  if (profilesKey.length == 0) {
    return (
      <TutorialForm
        changeHandler={changeHandler}
        profileSubmit={profileSubmit}
        profileSave={profileSave}
        colorMapArr={colorMapArr}
        dayMapArr={dayMapArr}
        allValues={allValues}
        setAllValues={setAllValues}
      ></TutorialForm>
    );
  } else {
    return (
      <ProfileForm
        changeHandler={changeHandler}
        profileSubmit={profileSubmit}
        profileSave={profileSave}
        colorMapArr={colorMapArr}
        dayMapArr={dayMapArr}
        allValues={allValues}
        setAllValues={setAllValues}
      ></ProfileForm>
    );
  }
};
export default BuildProfile;
