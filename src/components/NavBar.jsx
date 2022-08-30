import React, { Fragment } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";

const NavBar = (props) => {
  console.log(props);
  return (
    <Fragment>
      <div
        className="sidebars-button text-dark mr-auto"
        // onClick={props.handleToggle()}
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
    </Fragment>
  );
};

export default NavBar;
