import React, { useEffect, useState } from "react";
import TutorialForm from "./TutorialForm.js";
import { useDispatch } from "react-redux";
import { toggleShowing, changeId } from "../../features/modalSlice.js";
import ProfileForm from "./ProfileForm.js";
const BuildProfile = ({ student, setStudent }) => {
  const dispatch = useDispatch();
  //요일 map
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
  // const colorMapArr = [
  //   "pinkCoral",
  //   "lightPink",
  //   "deepYellow",
  //   "lightYellow",
  //   "lightGreen",
  //   "fluorescentGreen",
  //   "lightblue",
  //   "deepblue",
  //   "pastelPurple",
  // ];
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
    // if (e.target.hasAttribute("data-day")) {
    if (e.target.name == "days") {
      console.log("changeHandler");
      let checked = e.target.checked;
      console.log(checked);
      let daysNewValue;
      // if (checked) {
      //   daysNewValue = [...allValues.days, Number(e.target.dataset.day)];
      // } else {
      //   daysNewValue = allValues.days.filter(
      //     (el) => el != e.target.dataset.day
      //   );
      // }
      if (checked) {
        daysNewValue = [...allValues.days, Number(e.target.value)];
      } else {
        daysNewValue = allValues.days.filter((el) => el != e.target.value);
      }
      // setAllValues({
      //   ...allValues,
      //   ...{ days: daysNewValue },
      // });
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
      setStudent([...student, profileObjWithId]);
      dispatch(toggleShowing());
      dispatch(changeId("successSaving"));
    }
  };
  const profileSubmit = (e) => {
    e.preventDefault();
  };
  if (student.length == 0) {
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
