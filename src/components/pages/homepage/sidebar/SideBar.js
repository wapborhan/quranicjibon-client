import React from "react";
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
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus">
          <FaQuran />
        </i>
        {/* <img src="img/logo.png" alt="L" /> */}
        <span className="logo_name">AlQuran</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#" className="active">
            <i className="text-white">
              <FaBookOpen />
            </i>
            <span className="links_name">আল কুরআন (সুরা ক্রমে)</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="text-white">
              <FaBookReader />
            </i>
            <span className="links_name">সহীহ হাদিস সমুহ</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className=" text-white">
              <FaBook />
            </i>
            <span className="links_name">কালেমা</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className=" text-white">
              <FaCopy />
            </i>
            <span className="links_name">দোয়া সমুহ</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="text-white">
              <BsStopwatch />
            </i>
            <span className="links_name">নামাজের সময়সুচী</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="text-white">
              <FaMoon />
            </i>
            <span className="links_name">রমজান</span>
          </a>
        </li>

        <li className="log_out">
          <a href="#">
            <i className=" text-white">
              <FaShareAlt />
            </i>
            <span className="links_name">Share</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
