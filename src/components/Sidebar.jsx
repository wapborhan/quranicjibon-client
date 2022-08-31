import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
  ImCoinDollar,
  ImStatsBars,
  ImEnter,
  ImExit,
  ImCog,
} from "react-icons/im";

const Sidebar = (props) => {
  return (
    <Fragment>
      <divx
        className={
          props.isActive
            ? "sidebars bg-dark text-light  "
            : "sidebars bg-dark text-light active"
        }
      >
        <div className="logo-details">
          <ImCoinDollar />
          <span className="logo_name">Islam BD</span>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/income-expense-react">
              <i className="fas fa-exclamation-triangle text-white">
                <ImStatsBars />
              </i>
              <span className="links_name">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/income">
              <i className="fas fa-exclamation-triangle text-white">
                <ImEnter />
              </i>
              <span className="links_name">Income</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/expense">
              <i className="fas fa-exclamation-triangle text-white">
                <ImExit />
              </i>
              <span className="links_name">Expense</span>
            </NavLink>
          </li>

          <li className="log_out">
            <NavLink to="/setting">
              <i className="fas fa-exclamation-triangle text-white">
                <ImCog />
              </i>
              <span className="links_name">About</span>
            </NavLink>
          </li>
        </ul>
      </divx>
    </Fragment>
  );
};

export default Sidebar;
