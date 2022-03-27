import React from "react";

export default function SideBar() {
  return (
    <div className="sidebars bg-primary">
      <div className="logo-details">
        {/* <!-- <i className='bx bxl-c-plus-plus'></i> --> */}
        <img src="img/logo.png" alt="L" />
        <span className="logo_name">WebBook</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#" className="active">
            <i className="fas fa-exclamation-triangle text-white"></i>
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-exclamation-triangle text-white"></i>
            <span className="links_name">Product</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-exclamation-triangle text-white"></i>
            <span className="links_name">Order list</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-exclamation-triangle text-white"></i>
            <span className="links_name">Analytics</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-exclamation-triangle text-white"></i>
            <span className="links_name">Stock</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-exclamation-triangle text-white"></i>
            <span className="links_name">Total order</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-exclamation-triangle text-white"></i>
            <span className="links_name">Team</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-exclamation-triangle text-white"></i>
            <span className="links_name">Messages</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-exclamation-triangle text-white"></i>
            <span className="links_name">Favrorites</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-exclamation-triangle text-white"></i>
            <span className="links_name">Setting</span>
          </a>
        </li>
        <li className="log_out">
          <a href="#">
            <i className="fas fa-exclamation-triangle text-white"></i>
            <span className="links_name">Log out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
