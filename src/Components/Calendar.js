import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BiX,
  BiPlus,
  BiMenu,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";
import "../Styles/basic.scss";
import "../Styles/calendar.scss";
import HomeworksByDate from "./HomeworksByDate";
const Calendar = ({ student, homework, setHomework }) => {
  let [today, setToday] = useState(new Date());
  let date = today.getDate();
  let day = today.getDay();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  //저번 달 정보들을 선언한다.
  let prevDateInfo = new Date(year, month - 1, 0);
  let prevLastDate = prevDateInfo.getDate();

  //이번 달의 첫번째 날짜를 찾아낸다.
  let startDateInfo = new Date(year, month - 1, 1);
  //이번 달의 마지막 날짜와 요일을 찾아낸다.
  let lastDateInfo = new Date(year, month, 0);
  let lastDate = lastDateInfo.getDate();

  //이번 달 1일~ 31일(혹은 30일)까지를 배열에 넣는다.
  const dates = [];
  for (let i = 1; i <= lastDate; i++) {
    dates.push(i);
  }

  //저번 달 1일 ~ 31일(혹은 30일)까지를 배열에 넣는다.
  const prevDates = [];
  for (let i = 1; i <= prevLastDate; i++) {
    prevDates.push(i);
  }

  //저번 달 날짜 중에서, 이번 달 달력에 보이는 날짜들을 배열에 넣는게 목표이다.
  // 1. 요일 번호를 찾는다. 요일 번호는 이번 달의 첫번째 날 요일(숫자)랑 똑같다.
  // 2. 저번달 날짜들 배열을 만들고, 거기에서 요일 번호만큼의 개수만큼 배열 값에서 따로 자른다(뒤에서부터 자른다.).
  let dayOfStartDate = startDateInfo.getDay();
  let prevVisibleDates = prevDates.slice(-dayOfStartDate);

  //다음 달 날짜 중에서, 이번 달 달력에 보이는 날짜들을 배열에 넣는게 목표이다.
  // 1. 요일 번호를 찾는다.
  let dayOfLastDate = lastDateInfo.getDay();
  // 2. 보이는 날짜들이 몇 개 인지 구하고, 그 개수만큼 배열에 1을 추가하는 반복문을 돌린다.
  let lastVisibleDates = [];
  const 개수 = 7 - dayOfLastDate - 1;
  for (let i = 1; i <= 개수; i++) {
    lastVisibleDates.push(i);
  }

  //저번 달, 이번 달, 다음 달 날짜 배열들을 다 합쳐서 이번 달력 배열을 만든다.
  //이번달이 일요일부터 시작하면, 저번 달 날짜 배열은 합치지 않는다.
  let fullDatesOfMonth = [];
  if (dayOfStartDate == 0) {
    fullDatesOfMonth = dates.concat(lastVisibleDates);
  } else {
    fullDatesOfMonth = prevVisibleDates.concat(dates, lastVisibleDates);
  }

  //버튼 눌렀을 때 이전 달로 간다.
  function toPrevMonth() {
    setToday(new Date(year, month - 2, date));
  }

  //버튼 눌렀을 때 다음 달로 간다.
  function toNextMonth() {
    setToday(new Date(year, month, date));
  }

  ////요일 attr 정하기
  const daysToNumArray = [
    0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3,
    4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6,
  ];

  const fullDayOfThisDate = (date, i) => {
    const firstWeek = i <= 6;
    const lastWeek = i >= 22;
    // 달력의 첫번째 주인데 날짜가 22~31일 사이라면 이전 달 날짜다.
    if (firstWeek && 22 <= date && date <= 31) {
      if (month == 1) return `${year - 1}-12-${date}`;
      return `${year}-${month - 1}-${date}`;
    }
    // 달력의 마지막 주인데 날짜가 1~6일 사이라면 다음 달 날짜다.
    else if (lastWeek && date <= 6) {
      if (month == 12) return `${year + 1}-1-${date}`;
      return `${year}-${month + 1}-${date}`;
    }
    return `${year}-${month}-${date}`;
  };

  //캘린더에서 날짜 칸을 누르면 숙제 목록 창이 뜬다.
  const [displayHomeworks, setDisplayHomeworks] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const closeHomeworks = () => {
    setDisplayHomeworks(false);
  };
  //클릭한 칸의 날짜에 해당하는 homework데이터를 보여주어야 한다.
  //클릭한 칸의 attribute에서 날짜 정보를 얻는다. 한자리수는 앞에 0을 붙여준다.
  const showHomeworks = (e) => {
    setDisplayHomeworks(true);
    const targetDate = e.currentTarget.getAttribute("data-full-date");
    const targetDateArr = targetDate
      .split("-")
      .map((el) => (el.length == 1 ? "0".concat(el) : el));
    setSelectedDate(
      `${targetDateArr[0]}-${targetDateArr[1]}-${targetDateArr[2]}`
    );
  };

  //클릭한 숙제를 삭제한다.
  const deleteHomework = (info) => {
    const getHomeworks = JSON.parse(localStorage.getItem("homeworksKey"));
    const afterDelete = getHomeworks.filter((el) => el.id != info.id);
    setHomework(afterDelete);
  };
  useEffect(() => {
    localStorage.setItem("homeworksKey", JSON.stringify(homework), [homework]);
  });

  const [displayMenu, setDisplayMenu] = useState(false);
  const showMenu = () => {
    setDisplayMenu(!displayMenu);
  };
  const hasStudent = (info, day, i, date) => {
    const startYear = Number(info.firstDate.substring(0, 4));
    const startMonth = Number(info.firstDate.substring(5, 7));
    const startDate = Number(info.firstDate.substring(8, 10));
    const isLessonDay = info.days.includes(day);
    const isPrevMonthDate = (i) => {
      if (i <= 6 && 22 <= date && date <= 31) return true;
      return false;
    };
    const isNextMonthDate = (i) => {
      if (i >= 22 && date <= 6) return true;
      return false;
    };
    const checkMonth = () => {
      // 12월과 1월은 연도가 바뀌어도 한 달 차이가 나는 달이기 때문에 다른 조건을 달았다.
      if (month == 12 && startMonth == 1) {
        // 예를 들어 2021년 12월 달력인데 시작한 년도는 2022년 1월일 때이다.
        if (startYear - year == 1) return "isPrevMonth";
      }
      if (month == 1 && startMonth == 12) {
        // 예를 들어 2023년 1월 달력인데 시작한 년도는 2022년 12월일 때이다.
        if (year - startYear == 1) return "isNextMonth";
      }
      // 연도에 따라 구분한다.
      if (year == startYear) {
        // 한 달 차이가 나는 달이다.
        if (startMonth - month == 1) return "isPrevMonth";
        if (month - startMonth == 1) return "isNextMonth";
        // 이전 달, 다음 달, 이번 달이다.
        if (month < startMonth) return "olderMonth";
        if (month > startMonth) return "futureMonth";
        if (month == startMonth) return "sameMonth";
      } else if (year < startYear) return "olderMonth";
      else if (year > startYear) return "futureMonth";
    };
    if (!isLessonDay) return false;
    if (checkMonth() == "isPrevMonth") {
      if (isNextMonthDate(i) && date >= startDate) return true;
      else return false;
    }
    if (checkMonth() == "isNextMonth") {
      return true;
    }
    if (checkMonth() == "olderMonth") return false;
    if (checkMonth() == "futureMonth") return true;
    if (checkMonth() == "sameMonth") {
      if (isPrevMonthDate(i)) return false;
      if (isNextMonthDate(i)) return true;
      if (date >= startDate) return true;
    }
  };
  const [lessonStudentArr, setLessonStudentArr] = useState([]);
  const makeLessonStudentsArr = (dayNum, i, date) => {
    setLessonStudentArr(
      student.filter((info) => {
        return hasStudent(info, dayNum, i, date);
      })
    );
  };
  console.log(lessonStudentArr);
  return (
    <div className="calendar">
      <div onClick={showMenu} className="calendar__show-menu-btn nav-btn">
        <BiMenu className=""></BiMenu>
      </div>
      {displayMenu && (
        <div className="calendar__menu">
          <div onClick={showMenu} className="calendar__menu__close-btn nav-btn">
            <BiX className=""></BiX>
          </div>
          <Link
            to={`${process.env.REACT_APP_PATH}/buildprofile`}
            className="link--remove-style"
          >
            <div className="calendar__menu__list">학생 추가</div>
          </Link>
          <div className="menu__line"></div>
          <Link
            to={`${process.env.REACT_APP_PATH}/profiles`}
            className="link--remove-style"
          >
            <div className="calendar__menu__list">학생 모아보기</div>
          </Link>
          <div className="menu__line"></div>
          <Link
            to={`${process.env.REACT_APP_PATH}/homeworkview/:${year}-${month}-${date}`}
            className="link--remove-style"
          >
            <div className="calendar__menu__list">숙제 추가</div>
          </Link>
          <div className="menu__line"></div>
        </div>
      )}
      <div className="calendar-only">
        <div className="calendarTop">
          <div className="calendarTop__this-month">
            <button className="calendarTop__button--left" onClick={toPrevMonth}>
              <BiChevronLeft className="nav-btn"></BiChevronLeft>
            </button>
            <p>{month}월</p>
            <button
              className="calendarTop__button--right"
              onClick={toNextMonth}
            >
              <BiChevronRight className="nav-btn"></BiChevronRight>
            </button>
          </div>
        </div>
        <div className="calendarBttm">
          <div className="days">
            <div className="sunday">일</div>
            <div className="monday">월</div>
            <div className="tuesday">화</div>
            <div className="wednesday">수</div>
            <div className="thursday">목</div>
            <div className="friday">금</div>
            <div className="saturday">토</div>
          </div>
          <div className="dates">
            {fullDatesOfMonth.map((date, i) => (
              <div
                className="dates__date"
                key={i}
                data-요일={daysToNumArray[i]}
                data-full-date={fullDayOfThisDate(date, i)}
                onClick={(e) => {
                  showHomeworks(e);
                  makeLessonStudentsArr(daysToNumArray[i], i, date);
                }}
                // onClick={showHomeworks}
              >
                {date}
                <div className="dates__studentColors">
                  {student.map((info, studentIndex) => (
                    <div key={info.id}>
                      {hasStudent(info, daysToNumArray[i], i, date) && (
                        <div className={`${info.color} studentInCal`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {displayHomeworks && (
        <HomeworksByDate
          closeHomeworks={closeHomeworks}
          selectedDate={selectedDate}
          homework={homework}
          deleteHomework={deleteHomework}
          lessonStudentArr={lessonStudentArr} // 이 줄만 추가
        ></HomeworksByDate>
      )}
      <Link
        to={`${process.env.REACT_APP_PATH}/homeworkview/:${year}-${month}-${date}`}
        className="link--remove-style"
      >
        <div className="calendar__add-hwmk-btn">
          <BiPlus className="calendar__add-hwmk-btn__icon nav-btn"></BiPlus>
        </div>
      </Link>
    </div>
  );
};

export default Calendar;
