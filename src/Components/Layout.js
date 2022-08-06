import React from "react";
import NavBar from "./NavBar";
import layout from "../Styles/layout.module.scss";
const Layout = ({ children }) => {
  return (
    <div className={layout.whole_container}>
      <NavBar></NavBar>
      <div className={layout.content_container}>{children}</div>
    </div>
  );
};
export default Layout;
