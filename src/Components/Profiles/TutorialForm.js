import React, { useEffect, useRef } from "react";
import AOS from "aos";
import { TbArrowRight } from "react-icons/tb";
import "aos/dist/aos.css";
import tutorial from "../../Styles/tutorial.module.scss";
const TutorialForm = ({
  changeHandler,
  profileSubmit,
  profileSave,
  colorMapArr,
  dayMapArr,
  allValues,
}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const handleEnter = (e) => {
    if (e.type == "click") {
      //시작하기 버튼 눌렀을 때 다음 슬라이드로 넘어간다.
      const form = e.currentTarget.form;
      const index = [...form].indexOf(e.currentTarget);
      if (form.elements[index + 1].name == "firstDate") return; // date input에 포커싱될 때는 스크롤이 갑자기 내려간다.
      form.elements[index + 1].focus({
        preventScroll: true,
      });
      e.preventDefault();
    } else if (e.key.toLowerCase() === "enter") {
      //인풋창 입력한 뒤 엔터치면 다음 슬라이드로 넘어간다.
      if (e.target.type == "checkbox" || e.target.type == "radio") {
        e.target.checked = !e.target.checked;
        e.preventDefault();
        changeHandler(e);
        return;
      }
      const form = e.currentTarget.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 1].focus({
        preventScroll: true,
      });
      e.preventDefault();
    } else if (e.keyCode == "37") {
      const form = e.currentTarget.form;
      const index = [...form].indexOf(e.target);
      form.elements[index - 1].focus({
        preventScroll: true,
      });
      e.preventDefault();
    } else if (e.keyCode == "39") {
      const form = e.currentTarget.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 1].focus({
        preventScroll: true,
      });
      e.preventDefault();
    }
  };
  const startBtn = useRef();
  useEffect(() => {
    startBtn.current.focus();
  }, []);
  const duration = "1200";
  const NextSectionBtn = ({ isStartBtn, index }) => {
    let content;
    if (isStartBtn) content = "시작하기";
    else content = <TbArrowRight></TbArrowRight>;
    return (
      <button
        className={isStartBtn ? null : tutorial.nextSectionBtn}
        type="button"
        ref={isStartBtn ? startBtn : null}
        onClick={(e) => goToNextSection(e, index)}
        onKeyDown={(e) => goToNextSection(e, index)}
      >
        {content}
      </button>
    );
  };
  const goToNextSection = (e, index) => {
    const scrollPixel = window.innerHeight * index;
    window.scrollTo({
      top: scrollPixel,
      behavior: "smooth",
    });
    handleEnter(e);
  };
  return (
    <div className={tutorial.wrapper}>
      <form onSubmit={profileSubmit} className={tutorial.wrapper__form}>
        <div className={tutorial.wrapper__slide}>
          <div
            className={tutorial.content}
            data-aos="fade-up"
            data-aos-duration={duration}
          >
            <div className={tutorial.textContainer}>
              <p className={tutorial.question}>처음이신가요?</p>
              <p className={tutorial.question}>학생 프로필을 작성해주세요.</p>
              <NextSectionBtn isStartBtn={true} index={1}></NextSectionBtn>
            </div>
          </div>
        </div>
        <div className={tutorial.wrapper__slide}>
          <div
            className={tutorial.content}
            data-aos="fade-up"
            data-aos-duration={duration}
          >
            <div className={tutorial.content__align}>
              <p className={tutorial.question}>과외 받는 학생의 이름은.</p>
              <div>
                <input
                  type="text"
                  name="name"
                  title="과외 받는 학생의 이름"
                  placeholder="이수민"
                  onChange={changeHandler}
                  onKeyDown={handleEnter}
                ></input>
              </div>
              <NextSectionBtn isStartBtn={false} index={2}></NextSectionBtn>
            </div>
          </div>
        </div>
        <div className={tutorial.wrapper__slide}>
          <div
            className={tutorial.content}
            data-aos="fade-up"
            data-aos-duration={duration}
          >
            <div className={tutorial.content__align}>
              <p className={tutorial.question}>수업료는 얼마인지.</p>
              <div className={tutorial.fee__container}>
                <div className={tutorial.list}>
                  <span className={tutorial.title}>시급</span>
                  <div className={tutorial.content}>
                    <input
                      type="number"
                      name="wage"
                      min="0"
                      placeholder="2"
                      onChange={changeHandler}
                      onKeyDown={handleEnter}
                    ></input>
                    <span>만원</span>
                  </div>
                </div>
                <div className={tutorial.list}>
                  <span className={tutorial.title}>수업시간</span>
                  <div className={tutorial.content}>
                    <input
                      type="number"
                      name="hour"
                      min="0"
                      placeholder="2"
                      onChange={changeHandler}
                      onKeyDown={handleEnter}
                    ></input>
                    <span>시간</span>
                  </div>
                </div>
                <div className={tutorial.list}>
                  <span className={tutorial.title}>주</span>
                  <div className={tutorial.content}>
                    <input
                      type="number"
                      name="onWeek"
                      min="0"
                      placeholder="2"
                      onChange={changeHandler}
                      onKeyDown={handleEnter}
                    ></input>
                    <span>회</span>
                  </div>
                </div>
              </div>
              <NextSectionBtn isStartBtn={false} index={3}></NextSectionBtn>
            </div>
          </div>
        </div>
        <div className={tutorial.wrapper__slide}>
          <div
            className={tutorial.content}
            data-aos="fade-up"
            data-aos-duration={duration}
          >
            <div className={tutorial.content__align}>
              <p className={tutorial.question}>첫 수업은 언제인지.</p>
              <div>
                <input
                  type="date"
                  name="firstDate"
                  value={allValues.firstDate}
                  onChange={changeHandler}
                  onKeyDown={handleEnter}
                ></input>
              </div>
              <NextSectionBtn isStartBtn={false} index={4}></NextSectionBtn>
            </div>
          </div>
        </div>
        <div className={tutorial.wrapper__slide}>
          <div
            className={tutorial.content}
            data-aos="fade-up"
            data-aos-duration={duration}
          >
            <div className={tutorial.content__align}>
              <p className={tutorial.question}>언제 수업하는지.</p>
              <div className={tutorial.days__container}>
                {dayMapArr.map((el, i) => (
                  <div className={tutorial.day} key={i}>
                    <input
                      type="checkbox"
                      name="days"
                      id={`dayChoice${i}`}
                      value={i}
                      onClick={changeHandler}
                      onKeyDown={handleEnter}
                    ></input>
                    <label
                      htmlFor={`dayChoice${i}`}
                      className={
                        allValues.days.includes(i)
                          ? `${tutorial.dayLabel} 레이블 ${tutorial.checked}`
                          : tutorial.dayLabel
                      }
                      name="days"
                    >
                      {el}
                    </label>
                  </div>
                ))}
              </div>
              <NextSectionBtn isStartBtn={false} index={5}></NextSectionBtn>
            </div>
          </div>
        </div>
        <div className={tutorial.wrapper__slide}>
          <div
            className={tutorial.content}
            data-aos="fade-up"
            data-aos-duration={duration}
          >
            <div className={tutorial.content__align}>
              <p className={tutorial.question}>어떤 색으로 칠할지.</p>
              <div className={tutorial.colors__container}>
                {colorMapArr.map((el, i) => (
                  <div
                    className={
                      allValues.color == el.value
                        ? `${tutorial.colors} ${tutorial.checked}`
                        : `${tutorial.colors}`
                    }
                    key={i}
                  >
                    <input
                      type="radio"
                      className="colorInput"
                      name="color"
                      id={`colorChoice${i}`}
                      value={el.value}
                      onClick={changeHandler}
                      onKeyDown={handleEnter}
                    ></input>
                    <label
                      className={tutorial.colorLabel}
                      htmlFor={`colorChoice${i}`}
                    >
                      <div className={`${tutorial.color} ${el.value}`}></div>
                      {el.name}
                    </label>
                  </div>
                ))}
              </div>
              <NextSectionBtn isStartBtn={false} index={6}></NextSectionBtn>
            </div>
          </div>
        </div>
        <div className={tutorial.wrapper__slide}>
          <div
            className={tutorial.content}
            data-aos="fade-up"
            data-aos-duration={duration}
          >
            <div className={tutorial.textContainer}>
              <p className={tutorial.question}>이제 다 했어요.</p>
              <p className={tutorial.question}>확인해보세요.</p>
              <button onClick={profileSave}>
                {/* <button className="buildProfileSaveBtn" onClick={profileSave}> */}
                내 캘린더 보기
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default TutorialForm;
