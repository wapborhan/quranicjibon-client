import React, { Fragment } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";

const NavBar = (props) => {
  return (
    <Fragment>
      <nav
        id="topbar"
        className="topbar navbar navbar-expand navbar-light bg-white  mb-4 static-top shadow d-flex justify-content-between px-3"
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
          <span className="heabar">
            {" "}
            بِسْمِ اللَّـهِ الرَّ‌حْمَـٰنِ الرَّ‌حِيمِ
          </span>{" "}
          {/* <span className="headbn">দয়াময় মেহেরবান আল্লাহর নামে</span> */}
        </h2>
        <div className="account ">
          <div className="dateshow">
            {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
              day: "numeric",
              month: "long",
              weekday: "long",
              year: "numeric",
            }).format(Date.now())}
          </div>
          <div className="datehide">
            {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
              day: "numeric",
              month: "long",
              weekday: "long",
              // year: "numeric",
            }).format(Date.now())}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
