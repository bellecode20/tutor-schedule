import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiX, BiTrash, BiPlus } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { setProfilesKey, setProfilesLS } from "../features/profilesSlice";
import "../Styles/HomeworksByDate.scss";
import "../Styles/basic.scss";
import "../Styles/calendar.scss";
const HomeworksByDate = ({ homework, setHomework, closeHomeworks }) => {
  const dispatch = useDispatch();
  const calendar = useSelector((state) => state.calendar.calendar);
  const clickedDate = useSelector((state) => state.clickedDate.date);
  const clickedDateArr = clickedDate.split("-").map((el) => Number(el));
  const getStuHavingLesson = () => {
    // 클릭한 날에 수업이 있는 학생들을 배열로 리턴한다.
    return calendar.reduce((acc, cur) => {
      if (cur.fullDate === clickedDate) return cur.students;
      return acc;
    }, []);
  };
  const hasHomework = (student) => {
    let content = "";
    let thisHomework = getHomework(student);
    if (thisHomework != 0) return (content = thisHomework.homeworkInput);
    return content;
  };
  const getHomework = (student) => {
    for (let h = 0; h < homework.length; h++) {
      if (student.name == homework[h].homeworkStudent) {
        if (clickedDate == homework[h].homeworkDate) {
          return homework[h];
        }
      }
    }
    // 해당하는 숙제가 없으면 무의미한 값을 리턴한다.
    return 0;
  };
  const deleteHomework = (info) => {
    const getHomeworks = JSON.parse(localStorage.getItem("homeworksKey"));
    const afterDelete = getHomeworks.filter((el) => el.id != info.id);
    const deleteExtraLesson = (info) => {
      let allStu = JSON.parse(localStorage.getItem("profilesKey"));
      const newAllStu = allStu.map((stu) => {
        if (stu.extraLesson.includes(info.homeworkDate)) {
          let updatedExtra = stu.extraLesson.filter(
            (el) => el != info.homeworkDate
          );
          stu.extraLesson = updatedExtra;
        }
        return stu;
      });
      dispatch(setProfilesKey(newAllStu));
      dispatch(setProfilesLS());
    };
    deleteExtraLesson(info);
    setHomework(afterDelete);
  };
  useEffect(() => {
    localStorage.setItem("homeworksKey", JSON.stringify(homework));
  }, [homework]);

  return (
    <div className="calendar__homework-lists">
      <div className="homework-lists__top">
        <div className="calendar__homework-lists__date">
          {clickedDateArr[1]}월 {clickedDateArr[2]}일
        </div>
        <div
          className="calendar__homework-lists__close-btn nav-btn"
          onClick={() => closeHomeworks()}
        >
          <BiX></BiX>
        </div>
      </div>
      <div className="calendar__homework-lists__all-students">
        {getStuHavingLesson().map((stu, studentIndex) => {
          return (
            <div key={studentIndex} className="calendar__homework-lists__list">
              <div className={`calendar__homework-list__student ${stu.color}`}>
                {stu.name}
                <div className="calendar__homework-list__delete">
                  {hasHomework(stu) == "" ? (
                    <BiTrash
                      className="calendar__homework-list__deleteBtn"
                      style={{ visibility: "hidden" }}
                    ></BiTrash>
                  ) : (
                    <BiTrash
                      className="calendar__homework-list__deleteBtn"
                      onClick={() => {
                        deleteHomework(getHomework(stu));
                      }}
                    ></BiTrash>
                  )}
                </div>
              </div>
              <div className="calendar__homework-list__content">
                {hasHomework(stu) == "" ? (
                  <p className="homework-list__noContent">숙제가 없어요</p>
                ) : (
                  <p style={{ whiteSpace: "pre-line" }}>{hasHomework(stu)}</p>
                )}
              </div>
            </div>
          );
        })}
        {getStuHavingLesson().length == 0 && (
          <p className="text">오늘은 수업이 없어요.</p>
        )}
      </div>
      <div className="calendar__homework-lists__addHmwk">
        <Link
          to={`${process.env.REACT_APP_PATH}/homeworkview/${clickedDate}`}
          className="homework-lists__addHmwk-btn"
        >
          숙제내기
        </Link>
      </div>
    </div>
  );
};
export default HomeworksByDate;
