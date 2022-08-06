import React from "react";
import { BiHome, BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-btn--container">
      <BiLeftArrowAlt
        className="nav-btn"
        onClick={() => navigate(-1)}
      ></BiLeftArrowAlt>
      <BiHome
        className="nav-btn"
        onClick={() => navigate(process.env.REACT_APP_PATH)}
      ></BiHome>
    </div>
  );
};
export default NavBar;
