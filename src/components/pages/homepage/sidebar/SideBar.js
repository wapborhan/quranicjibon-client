import React from "react";
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
import { BsStopwatch } from "react-icons/bs";

export default function SideBar() {
  return (
    <div className="sidebars bg-dark text-light">
      <NavLink to="/" className="logo-details text-decoration-none">
        <i className="bx bxl-c-plus-plus">
          <FaQuran />
        </i>
        {/* <img src="img/logo.png" alt="L" /> */}
        <span className="logo_name">AlQuran</span>
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink to="/sura">
            <i className="text-white">
              <FaBookOpen />
            </i>
            <span className="links_name">আল কুরআন (সুরা ক্রমে)</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/hadith">
            <i className="text-white">
              <FaBookReader />
            </i>
            <span className="links_name">সহীহ হাদিস সমুহ</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/kalema">
            <i className=" text-white">
              <FaBook />
            </i>
            <span className="links_name">কালেমা</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dowa">
            <i className=" text-white">
              <FaCopy />
            </i>
            <span className="links_name">দোয়া সমুহ</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/salat-time">
            <i className="text-white">
              <BsStopwatch />
            </i>
            <span className="links_name">নামাজের সময়সুচী</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/ramjan">
            <i className="text-white">
              <FaMoon />
            </i>
            <span className="links_name">রমজান</span>
          </NavLink>
        </li>

        <li className="log_out">
          <NavLink to="/about">
            <i className=" text-white">
              <FaShareAlt />
            </i>
            <span className="links_name">সাইট সম্পর্কে</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
