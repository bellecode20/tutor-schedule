import { useSelector, useDispatch } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { toggleShowing } from "../features/modalSlice";
import check from "../images/check.svg";
import error from "../images/error.svg";
import modal from "../Styles/modal.module.scss";
const ModalButton = ({ thisModal }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(toggleShowing());
    document.body.style.overflow = "auto";
  };
  const btnType = thisModal.buttonType;
  const btnLinks = thisModal.buttonLinks;
  // 버튼 하나만 있다.
  if (btnType == "one") {
    return (
      <button className={modal.ok_btn} onClick={closeModal} autoFocus>
        {btnLinks != null ? <Link to={btnLinks}>홈으로</Link> : "닫기"}
      </button>
    );
  }
  // 왼쪽, 오른쪽 총 두개의 버튼이 있다.
  if (btnType == "two") {
    return (
      <>
        <button className={modal.cancel_btn} onClick={closeModal}>
          <Link to={btnLinks[0]} className="link-in-btn">
            홈으로
          </Link>
        </button>
        <button className={modal.do_btn} onClick={closeModal}>
          <Link to={btnLinks[1]}>추가하기</Link>
        </button>
      </>
    );
  }
};
const Modal = () => {
  document.body.style.overflow = "hidden";
  const id = useSelector((state) => state.modal.id);
  const total = useSelector((state) => state.modal.total);
  const thisModal = total.filter((el) => {
    return el.id == id;
  })[0];
  const mainText = thisModal.mainText;
  const subText = thisModal.subText;
  const mode = thisModal.mode;

  document.body.addEventListener("keypress", function (e) {
    if (e.key === "Enter") console.log(e.target);
  });
  return ReactDOM.createPortal(
    <div className={modal.overlay}>
      <div
        className={
          mode == "Success"
            ? `${modal.content} ${modal.success_container}`
            : `${modal.content} ${modal.error_container}`
        }
      >
        <div className={modal.icon_wrap}>
          <img
            className={modal.icon}
            src={mode == "Success" ? check : error}
          ></img>
        </div>
        <p className={modal.text_main}>{mainText}</p>
        <p className={modal.text_sub}>{subText}</p>
        <ModalButton thisModal={thisModal}></ModalButton>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
export default Modal;
