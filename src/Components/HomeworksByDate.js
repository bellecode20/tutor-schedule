import { BiX, BiTrash, BiPlus } from "react-icons/bi";
import "../Styles/HomeworksByDate.scss";
import "../Styles/basic.scss";
import "../Styles/calendar.scss";
import React from "react";
import { Link } from "react-router-dom";
const HomeworksByDate = ({
  selectedDate,
  homework,
  deleteHomework,
  closeHomeworks,
  lessonStudentArr,
}) => {
  const hasHomework = (student) => {
    let content = "";
    let thisHomework = getHomework(student);
    if (thisHomework != 0) return (content = thisHomework.homeworkInput);
    return content;
  };
  const getHomework = (student) => {
    for (let h = 0; h < homework.length; h++) {
      if (student.name == homework[h].homeworkStudent) {
        if (selectedDate == homework[h].homeworkDate) {
          return homework[h];
        }
      }
    }
    // 해당하는 숙제가 없으면 무의미한 값을 리턴한다.
    return 0;
  };
  return (
    <div className="calendar__homework-lists">
      <div
        className="calendar__homework-lists__close-btn nav-btn"
        onClick={() => closeHomeworks()}
      >
        <BiX></BiX>
      </div>
      <div className="calendar__homework-lists__date">{selectedDate}</div>
      <div className="calendar__homework-lists__all-students">
        {lessonStudentArr.map((stu, studentIndex) => {
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
                  hasHomework(stu)
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="calendar__homework-lists__addHmwk">
        <Link
          to={`${process.env.REACT_APP_PATH}/homeworkview/:${selectedDate}`}
          className="link--remove-style"
        >
          <button>
            <BiPlus></BiPlus> 숙제
          </button>
        </Link>
      </div>
    </div>
  );
};
export default HomeworksByDate;
