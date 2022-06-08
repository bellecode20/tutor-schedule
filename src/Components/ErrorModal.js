import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ErrorModal = ({
  setModalShow,
  setMainModalText,
  mainModalText,
  subModalText,
}) => {
  const closeModal = () => {
    setModalShow(false);
  };
  console.log(mainModalText);
  return (
    <div className="modal-container">
      <div className="modal__overlay"></div>
      <div className="modal__content">
        <div className="modal__content__icon-wrap">
          {mainModalText == "sameName" ||
          mainModalText == "writtenYet" ||
          mainModalText == "noStudentInHomework" ? (
            <svg
              className="modal__content__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M38.654 44.556C39.638 43.114 43 4.568 43 4.166S40.294 0 32.996 0 22.01 3.446 22.01 3.446c-.247 1.442 4.673 40.23 5.985 41.59 1.312 1.363 9.675.963 10.66-.48zM25.002 4.648c.052-.397 4.387-2.564 8.24-2.324 3.855.24 7.504 2.604 7.545 3.005.04.4-.37 3.004-.492 2.924-.123-.08-6.355-4.608-6.642-4.568-.287.04-.78 1.042-.41 1.282.37.24 6.765 4.768 6.765 4.928 0 .16-.41 2.324-.41 2.324s-6.847-5.21-7.052-5.21c-.205 0-.615 1.123-.41 1.283.205.16 7.34 5.13 7.34 5.29 0 .16-.165 3.204-.288 3.204-.123 0-6.56-5.69-6.806-5.65-.246.04-.574 1.322-.37 1.442.206.12 7.135 5.85 7.258 6.13.123.28-.287 3.124-.287 3.124s-7.01-5.69-7.134-5.69c-.124 0-.493 1.282-.288 1.442.205.16 7.298 6.01 7.298 6.25s.123 2.846-.164 2.766c-.287-.08-6.314-5.13-6.6-5.13-.288 0-.698.963-.37 1.283.328.32 6.6 5.49 6.642 5.69.04.2-.246 3.566-.246 3.566s-5.904-6.25-6.068-6.25-.37 1.523-.123 1.683c.247.16 5.864 6.01 5.946 6.21.082.2-.164 2.325-.164 2.325s-5.043-4.928-5.207-4.928-.656 1.482-.533 1.603c.123.12 5.453 5.01 5.453 5.01l-.205 2.203-5.084-4.287s-.41 1.24-.328 1.44c.082.2 5.125 4.248 5.125 4.41 0 .16-.205 1.44-.328 1.48-.123.04-.82.24-1.107.12-.287-.12-3.24-2.684-3.362-2.644-.123.04-.492 1.042-.37 1.202.124.16 1.682 1.723 1.682 1.723s-2.952.16-3.157-.12c-.204-.277-5.575-36.338-5.288-38.542zm7.667 45.145c-3.635.253-8.005 2.46-7.955 7.505.05 5.046 3.915 6.482 6.508 6.673 2.593.193 8.973-.454 9.276-5.555.41-6.887-2.83-8.97-7.83-8.622zm-.988 11.89c-2.294 0-3.99-2.428-4.04-4.344-.05-1.917 1.347-4.727 5.187-4.855 1.744-.058 5.086-.156 5.086 5.173 0 3.646-3.94 4.024-6.234 4.024zm-.858-7.867c-1.696.575-1.895 3.32-1.696 4.343.2 1.02 1.397.83 1.646.638.25-.192 0-.32-.15-1.533-.15-1.214.997-2.62 1.197-2.81.2-.192-.457-.82-.996-.64z" />
            </svg>
          ) : (
            <svg
              className="modal__content__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M64 13.435c-.05-.69-9.295-5.66-9.442-5.66-.147 0-10.714 17.672-10.86 17.72-.148.05-3.915-20.183-4.404-21.364C38.804 2.95.09 10.156.01 10.778c-.342 2.658 7.387 48.49 8.22 49.18.83.688 40.31-6.794 40.604-7.237.294-.443-1.614-10.19-1.565-10.93.048-.738 16.78-27.666 16.73-28.355zM9.795 57.838c-.195-.492-7.778-43.025-7.73-45.585.004-.156 35.47-5.81 35.665-5.514.196.294 4.207 21.364 4.158 21.758-.05.394-2.935 4.184-3.082 4.184-.147 0-14.58-11.372-14.92-11.372-.343 0-8.66 8.812-8.513 9.353.147.542 25.243 19.987 25.733 20.233.49.246 4.354-6.006 4.5-5.76.148.246.735 6.203.735 6.203S9.99 58.33 9.796 57.837zM47 38.024c-.183 0-2.862-1.994-3.01-1.994-.146 0-.586 1.108-.586 1.108l2.825 2.03-1.212 1.884s-2.715-1.81-2.9-1.81c-.182 0-.806.776-.55.998.258.222 2.936 1.772 2.9 1.957-.037.185-1.32 2.363-1.43 2.363-.11 0-3.633-2.917-3.743-2.917-.11 0-.954.628-.624.997.33.37 3.56 2.99 3.523 3.1-.037.112-.697 1.995-.99 1.884-.295-.11-23.043-17.02-22.896-17.61.147-.592 5.296-5.6 5.675-5.847.29-.19 14.236 12.16 14.97 11.667.734-.492 16.144-24.96 16.584-24.86.44.098 5.235 3.397 5.235 3.397L52.21 28.55s-1.54-.86-1.65-.825c-.11.037-.55.85-.368.96.183.11 1.394.812 1.394.812s-.99 2.363-1.1 2.326c-.11-.036-1.652-.996-1.8-.996s-.586.923-.476.997c.11.075 1.724 1.146 1.724 1.146l-1.137 2.104s-2.275-1.33-2.385-1.33c-.11 0-.66 1.035-.514 1.146.147.11 2.165 1.477 2.165 1.477s-.88 1.66-1.063 1.66zm-11.74-25.55c-.074-.11-27.634 3.535-27.886 3.915-.073.11-.183 1.18 0 1.328.183.148 27.995-3.58 28.142-3.766.146-.185-.184-1.366-.257-1.477zM19.297 24.4c0-.11-10.31 1.33-10.75 1.55 0 0 .147.998.257 1.22.11.22 9.393-1.33 9.613-1.404.22-.074.88-1.255.88-1.366zm10.017.037s7.155-1.034 7.19-1.145c.038-.11-.182-1.33-.292-1.33-.11 0-8.072 1.256-8.402 1.33-.18.04 1.505 1.145 1.505 1.145zM21.17 37.803c-.184-.074-10.236 1.258-10.495 1.403-.33.185-.073.997.073 1.145.147.15 11.227-1.587 11.484-1.697.258-.112-.88-.777-1.063-.85zm7.007 5.87c-.22-.148-16.33 2.755-16.584 2.806-.367.073 0 .81.183 1.033.183.222 17.135-2.843 17.318-2.954s-.696-.74-.917-.887zm3.89 5.02c-.257-.11-19.362 3.068-19.667 3.287-.257.185.037 1.034.293 1.145.257.11 19.923-3.803 19.923-3.803s-.293-.517-.55-.628zm-10.31-18.79s.476-.813.55-.998c.072-.185-.548-.835-.66-.812-.184.037-1.432 1.735-1.652 2.068-.22.333 4.22 3.36 4.586 3.545.368.185.515-.406.588-.775.074-.37-3.412-3.028-3.412-3.028z" />
            </svg>
          )}
        </div>
        <div className="modal__text--main">
          {
            {
              sameName: "앗...",
              writtenYet: "앗...",
              successSaving: "저장~",
              noStudentInHomework: "앗...",
              askDelete: "정말로요?",
            }[mainModalText]
          }
        </div>
        <div className="modal__text--sub">
          {
            {
              sameName: "똑같은 이름의 학생이 있어요",
              writtenYet: "작성하지 않은 항목이 있어요",
              successSaving: "저장했어요",
              noStudentInHomework: "숙제를 낼 학생이 없어요",
              askDelete: "삭제시 되돌릴 수 없어요",
            }[subModalText]
          }
        </div>
        {
          {
            sameName: (
              <div className="modal__okBtn" onClick={closeModal}>
                닫기
              </div>
            ),
            writtenYet: (
              <div className="modal__okBtn" onClick={closeModal}>
                닫기
              </div>
            ),
            successSaving: (
              <div className="modal__okBtn" onClick={closeModal}>
                닫기
              </div>
            ),
            noStudentInHomework: (
              <Link
                to={`${process.env.REACT_APP_PATH}/buildprofile"`}
                className="modal__do-btn"
                onClick={() => {
                  closeModal();
                  setMainModalText("");
                }}
              >
                <div>추가하기</div>
              </Link>
            ),
          }[mainModalText]
        }
        {
          {
            noStudentInHomework: (
              <Link
                to={process.env.REACT_APP_PATH}
                className="modal__cancel-btn"
                onClick={closeModal}
              >
                <div>홈으로</div>
              </Link>
            ),
          }[mainModalText]
        }
      </div>
    </div>
  );
};
export default ErrorModal;
