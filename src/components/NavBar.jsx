import React, { Fragment } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";

const NavBar = (props) => {
  return (
    <Fragment>
      <nav
        id="topbar"
        className="topbar navbar navbar-expand navbar-light bg-white  mb-4 static-top shadow d-flex justify-content-between px-4"
      >
        <div
          className="sidebars-button text-dark mr-auto"
          onClick={props.handleToggle}
        >
          <FaBars />
          <div className={props.isActive ? "dashboard" : "dashboard-show"}>
            Islam BD
          </div>
        </div>

        <h2 id="nameTitle" className="text-center text-dark">
          আয় ব্যয় হিসাব
        </h2>
        <div className="account ">
          <FaUserCircle />
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
