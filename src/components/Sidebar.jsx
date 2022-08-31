import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
  FaQuran,
  FaBookOpen,
  FaBookReader,
  FaBook,
  FaCopy,
  FaMoon,
  FaShareAlt,
} from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

const Sidebar = (props) => {
  return (
    <Fragment>
      <div
        className={
          props.isActive
            ? "sidebars bg-dark text-light  "
            : "sidebars bg-dark text-light active"
        }
      >
        <div className="logo-details">
          <FaQuran />
          <span className="logo_name">Islam BD</span>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">
              <i className="fas fa-exclamation-triangle text-white">
                <FaBookOpen />
              </i>
              <span className="links_name">আল কুরআন (সুরা ক্রমে) </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/hadith">
              <i className="fas fa-exclamation-triangle text-white">
                <FaBookReader />
              </i>
              <span className="links_name">Income</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/expense">
              <i className="fas fa-exclamation-triangle text-white">
                <FaBook />
              </i>
              <span className="links_name">Expense</span>
            </NavLink>
          </li>

          <li className="log_out">
            <NavLink to="/setting">
              <i className="fas fa-exclamation-triangle text-white">
                <FcAbout />
              </i>
              <span className="links_name">About</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidebar;
