import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  TbChevronUp,
  TbChevronDown,
  TbCalendarEvent,
  TbPlus,
} from "react-icons/tb";
import HomeworksByDate from "./HomeworksByDate";
import { useSelector, useDispatch } from "react-redux";
import { changeCalendar } from "../features/calendarSlice";
import { changeDate } from "../features/clickedDateSlice";
import "../Styles/basic.scss";
import "../Styles/calendar.scss";
import { toggleShowing } from "../features/modalSlice";
const Calendar = ({ homework, setHomework }) => {
  const dispatch = useDispatch();
  const isShown = useSelector((state) => state.modal.isShown);
  const profilesKey = useSelector((state) => state.profiles.profiles);
  const [displayHomeworks, setDisplayHomeworks] = useState(false);
  let [today, setToday] = useState(new Date());
  let date = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  const makeTwoDigit = (num) => {
    return num.toString().padStart(2, "0");
  };
  let todayFullDate = `${year}-${makeTwoDigit(month)}-${makeTwoDigit(date)}`;
  const makeCalendar = () => {
    //// 요일을 번호로 나타낸다. 일요일부터 0번으로 시작한다.
    const daysToNumArray = [
      0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3,
      4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6,
    ];
    const datesOfThisMonth = () => {
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
      return fullDatesOfMonth;
    };

    const fullDate = (date, i) => {
      const isPrevMonthDate = (i) => {
        if (i <= 6 && 22 <= date && date <= 31) return true;
        return false;
      };
      const isNextMonthDate = (i) => {
        if (i >= 22 && date <= 6) return true;
        return false;
      };
      let calendarYear = year;
      let calendarMonth = month;
      let calendarDate = date;
      if (isPrevMonthDate(i)) {
        calendarMonth = month - 1;
        if (month == 1) {
          calendarMonth = 12;
          calendarYear = year - 1;
        }
      }
      if (isNextMonthDate(i)) {
        calendarMonth = month + 1;
        if (month == 12) {
          calendarMonth = 1;
          calendarYear = year + 1;
        }
      }
      return `${calendarYear}-${makeTwoDigit(calendarMonth)}-${makeTwoDigit(
        calendarDate
      )}`;
    };
    const isLessonDay = (info, fullDate, day) => {
      const startYear = Number(info.firstDate.substring(0, 4));
      const startMonth = Number(info.firstDate.substring(5, 7));
      const startDate = Number(info.firstDate.substring(8, 10));
      const calendarYear = Number(fullDate.substring(0, 4));
      const calendarMonth = Number(fullDate.substring(5, 7));
      const calendarDate = Number(fullDate.substring(8, 10));
      const checkDay = info.days.includes(day);
      if (startYear == calendarYear) {
        if (startMonth == calendarMonth) {
          if (startDate <= calendarDate) {
            if (checkDay) return true;
          }
        } else if (startMonth < calendarMonth) {
          if (checkDay) return true;
        }
      } else if (startYear < calendarYear) {
        // 이 학생이 수업을 시작한 날짜가 예전일때.
        if (checkDay) return true;
      }
      // 수업 요일이 아니지만, 숙제를 낸 경우에도 렌더링한다.
      if (info.extraLesson.includes(fullDate)) return true;
      //예전 연도는 렌더링하지 않는다.
      return false;
    };
    const thisMonthCalendar = [...datesOfThisMonth()].map((el, i) => {
      let dayNum = daysToNumArray[i];
      let yearMonthDate = fullDate(el, i);
      let studentsHavingLesson = [];
      // LS에 저장된 학생 프로필이 있다면 추가한다.
      if (profilesKey != null) {
        studentsHavingLesson = [...profilesKey].reduce((acc, cur) => {
          if (isLessonDay(cur, yearMonthDate, dayNum)) acc.push(cur);
          return acc;
        }, []);
      }
      return {
        fullDate: yearMonthDate,
        date: el,
        dayNum: dayNum,
        students: studentsHavingLesson,
      };
    });
    return thisMonthCalendar;
  };
  const toPrevMonth = () => {
    setToday(new Date(year, month - 2, date));
    closeHomeworks();
  };
  const toNextMonth = () => {
    setToday(new Date(year, month, date));
    closeHomeworks();
  };
  const closeHomeworks = () => {
    setDisplayHomeworks(false);
  };
  const changeSelectedStates = (e) => {
    const targetDate = e.currentTarget.getAttribute("data-full-date");
    dispatch(changeDate(targetDate));
    setDisplayHomeworks(true);
  };
  useEffect(() => {
    dispatch(changeCalendar(makeCalendar()));
    if (isShown) dispatch(toggleShowing()); // 모달창 안닫고 뒤로가기를 눌러서 온 경우엔 모달창을 닫는다.
  }, [today]);
  useEffect(() => {
    // extraLesson을 삭제하면 (학생 프로필을 수정하면) 캘린더 객체도 업뎃해야 한다.
    dispatch(changeCalendar(makeCalendar()));
  }, [profilesKey]);
  return (
    <div className="calendar">
      <div className="calendar__nav">
        <div className="calendar__links">
          <TbCalendarEvent className="calendar__show-menu-btn"></TbCalendarEvent>
          <Link to={`${process.env.REACT_APP_PATH}/profiles`} className="link">
            <div>학생 관리</div>
          </Link>
          <Link
            to={`${process.env.REACT_APP_PATH}/homeworkview/${todayFullDate}`}
            className="link"
          >
            <div>숙제 내기</div>
          </Link>
        </div>
      </div>
      <div className="calendar-only">
        <div className="calendarTop">
          <div className="calendarTop__this-month">
            {/* <div>{year}년</div> */}
            <p>{month}월</p>
            <div>
              <button
                className="calendarTop__button--left nav-btn"
                onClick={toNextMonth}
              >
                <TbChevronUp className="nav-btn"></TbChevronUp>
              </button>
              <button
                className="calendarTop__button--right nav-btn"
                onClick={toPrevMonth}
              >
                <TbChevronDown className="nav-btn"></TbChevronDown>
              </button>
            </div>
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
            {makeCalendar().map((oneDay, i) => (
              <div
                className="dates__date"
                key={i}
                data-full-date={oneDay.fullDate}
                onClick={changeSelectedStates}
              >
                <div className="dates__date__date">
                  {oneDay.date}
                  <div className="dates__studentColors">
                    {oneDay.students.map((obj, idx) => (
                      <div
                        className={`${obj.color} studentInCal`}
                        key={idx}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {displayHomeworks && (
        <HomeworksByDate
          closeHomeworks={closeHomeworks}
          homework={homework}
          setHomework={setHomework}
        ></HomeworksByDate>
      )}
      <Link
        to={`${process.env.REACT_APP_PATH}/homeworkview/${todayFullDate}`}
        className="link--remove-style"
      >
        <div className="calendar__add-hwmk-btn">
          <TbPlus className="calendar__add-hwmk-btn__icon"></TbPlus>
        </div>
      </Link>
    </div>
  );
};

export default Calendar;
