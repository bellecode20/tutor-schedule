import { BiX, BiTrash } from "react-icons/bi";
import "../Styles/HomeworksByDate.scss";
import "../Styles/basic.scss";
import "../Styles/calendar.scss";
const HomeworksByDate = ({
  selectedDate,
  homework,
  deleteHomework,
  closeHomeworks,
}) => {
  return (
    <div className="calendar__homework-lists">
      <div
        className="calendar__homework-lists__close-btn nav-btn"
        onClick={() => closeHomeworks()}
      >
        <BiX></BiX>
      </div>
      <div className="calendar__homework-lists__date">{selectedDate}</div>
      {homework.map(
        (info, i) =>
          selectedDate == info.homeworkDate && (
            <div key={i} className="calendar__homework-lists__list">
              <div className={`calendar__homework-list__student ${info.color}`}>
                {info.homeworkStudent}
                <div
                  className="calendar__homework-list__delete"
                  onClick={() => deleteHomework(info)}
                >
                  <BiTrash></BiTrash>
                </div>
              </div>
              <div className="calendar__homework-list__content">
                {info.homeworkInput}
              </div>
            </div>
          )
      )}
    </div>
  );
};
export default HomeworksByDate;
