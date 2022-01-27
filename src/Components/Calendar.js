import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BiX,
  BiPlus,
  BiMenu,
  BiChevronLeft,
  BiChevronRight,
  BiTrash,
} from "react-icons/bi";
import "../Styles/basic.scss";
import "../Styles/calendar.scss";
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
    const onlyOneInCalendar =
      fullDatesOfMonth.indexOf(date) == fullDatesOfMonth.lastIndexOf(date);
    const lateInMonth = 22 <= date && date <= 31;
    const earlyInMonth = 1 <= date && date <= 6;
    const arr = [];
    let idx = fullDatesOfMonth.indexOf(date);

    //date가 fullDatesOfMonth안에서 존재하지 않을 떄까지 반복문을 실행한다.
    while (idx != -1) {
      //date를 배열에 넣는다.
      arr.push(idx);
      //이제 방금 넣은 값 뒤에서부터 반복문을 실행해야 하므로, idx를 방금 넣은 값의 바로 뒷 값으로 다시 정의한다.
      idx = fullDatesOfMonth.indexOf(date, idx + 1);
    }
    //다음달 날짜가 이번달 마지막 줄에 껴있을 때
    if (!onlyOneInCalendar && i >= 7 && earlyInMonth && arr.indexOf(i) == 1) {
      return `${year}-${month + 1 == 13 ? 1 : month + 1}-${date}`;
    }
    //저번달 날짜가 이번달 첫째줄에 껴있을 때
    else if (
      !onlyOneInCalendar &&
      i <= 6 &&
      lateInMonth &&
      arr.indexOf(i) == 0
    ) {
      return `${year}-${month - 1 == 0 ? 12 : month - 1}-${date}`;
    } //22~31일이 이번달 첫째 줄에 나올때. 저번달 날짜가 이번달에 처음 나올 때이다.
    else if (onlyOneInCalendar && lateInMonth && i <= 6) {
      return `${year}-${month - 1 == 0 ? 12 : month - 1}-${date}`;
    } else {
      return `${year}-${month}-${date}`;
    }
  };

  //캘린더에서 날짜 칸을 누르면 숙제 목록 창이 뜬다.
  const [displayHomeworks, setDisplayHomeworks] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  //클릭한 칸의 날짜에 해당하는 homework데이터를 보여주어야 한다.
  //클릭한 칸의 attribute에서 날짜 정보를 얻는다. 한자리수는 앞에 0을 붙여준다.
  const showHomeworks = (e) => {
    setDisplayHomeworks(true);
    const targetDate = e.target.getAttribute("data-full-date");
    if (targetDate != null) {
      const targetDateArr = targetDate
        .split("-")
        .map((el) => (el.length == 1 ? "0".concat(el) : el));
      setSelectedDate(
        `${targetDateArr[0]}-${targetDateArr[1]}-${targetDateArr[2]}`
      );
    }
  };

  //클릭한 숙제를 삭제한다.
  const deleteHomework = (info) => {
    console.log(info.id);
    const getHomeworks = JSON.parse(localStorage.getItem("homeworksKey"));
    const afterDelete = getHomeworks.filter((el) => el.id != info.id);
    console.log(afterDelete);
    setHomework(afterDelete);
  };
  useEffect(() => {
    localStorage.setItem("homeworksKey", JSON.stringify(homework), [homework]);
  });

  const [displayMenu, setDisplayMenu] = useState(false);
  const showMenu = () => {
    setDisplayMenu(!displayMenu);
  };
  return (
    <div className="calendar">
      <div onClick={showMenu} className="calendar__show-menu-btn nav-btn">
        <BiMenu className=""></BiMenu>
      </div>
      {displayMenu == true ? (
        <div className="calendar__menu">
          <div onClick={showMenu} className="calendar__menu__close-btn nav-btn">
            <BiX className=""></BiX>
          </div>
          <Link
            to="/tutor-schedule/buildprofile"
            className="link--remove-style"
          >
            <div className="calendar__menu__list">학생 추가</div>
          </Link>
          <div className="menu__line"></div>
          <Link to="/tutor-schedule/profiles" className="link--remove-style">
            <div className="calendar__menu__list">학생 모아보기</div>
          </Link>
          <div className="menu__line"></div>
          <Link
            to={`/tutor-schedule/homeworkview/:${year}-${month}-${date}`}
            className="link--remove-style"
          >
            <div className="calendar__menu__list">숙제 추가</div>
          </Link>
          <div className="menu__line"></div>
        </div>
      ) : null}

      <div className="캘린더">
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
                onClick={showHomeworks}
              >
                {date}
                {student.map((info, studentIndex) => (
                  <div key={info.id}>
                    {/* year도 같고, month도 같을 때, 달력 두번째 줄부터는 findIndex */}
                    {(info.days.includes(daysToNumArray[i]) &&
                      year == Number(info.firstDate.substring(0, 4)) &&
                      month == Number(info.firstDate.substring(5, 7)) &&
                      fullDatesOfMonth.findIndex(
                        (x) => x == Number(info.firstDate.substring(8, 10))
                      ) >= 7 &&
                      i >=
                        fullDatesOfMonth.findIndex(
                          (x) => x == Number(info.firstDate.substring(8, 10))
                        )) ||
                    //year도 같고, month도 같을 때, 달력 첫번째 줄은 lastIndexOf
                    (info.days.includes(daysToNumArray[i]) &&
                      year == Number(info.firstDate.substring(0, 4)) &&
                      month == Number(info.firstDate.substring(5, 7)) &&
                      fullDatesOfMonth.findIndex(
                        (x) => x == Number(info.firstDate.substring(8, 10))
                      ) <= 6 &&
                      i >=
                        fullDatesOfMonth.lastIndexOf(
                          Number(info.firstDate.substring(8, 10))
                        )) ||
                    //year은 같고, month는 다를 때
                    (info.days.includes(daysToNumArray[i]) &&
                      year == Number(info.firstDate.substring(0, 4)) &&
                      month > Number(info.firstDate.substring(5, 7))) ||
                    //year이 더 크고(이전일 때), month가 작을 때
                    (info.days.includes(daysToNumArray[i]) &&
                      year > Number(info.firstDate.substring(0, 4)) &&
                      month < Number(info.firstDate.substring(5, 7))) ||
                    //year이 더 크고(이전일 때), month가 같을 때(이전 같은 달)
                    (info.days.includes(daysToNumArray[i]) &&
                      year > Number(info.firstDate.substring(0, 4)) &&
                      month == Number(info.firstDate.substring(5, 7)) &&
                      i >= 7 &&
                      i >=
                        fullDatesOfMonth.findIndex(
                          (x) => x == Number(info.firstDate.substring(8, 10))
                        )) ? (
                      <div className={`${info.color} studentInCal`}></div>
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {displayHomeworks == true ? (
        <div className="calendar__homework-lists">
          <div
            className="calendar__homework-lists__close-btn nav-btn"
            onClick={() => setDisplayHomeworks(false)}
          >
            <BiX></BiX>
          </div>
          <div className="calendar__homework-lists__date">{selectedDate}</div>
          {homework.map((info, i) =>
            selectedDate == info.homeworkDate ? (
              <div key={i} className="calendar__homework-lists__list">
                <div
                  className={`calendar__homework-list__student ${info.color}`}
                >
                  {info.homeworkStudent}
                  <div onClick={() => deleteHomework(info)}>
                    <BiTrash></BiTrash>
                  </div>
                </div>
                <div className="calendar__homework-list__content">
                  {info.homeworkInput}
                </div>
              </div>
            ) : null
          )}
        </div>
      ) : null}
      <Link
        to={`/tutor-schedule/homeworkview/:${year}-${month}-${date}`}
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
