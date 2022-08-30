import React, { Fragment } from "react";
import {
  FaBars,
  FaSearch,
  FaEnvelope,
  FaCogs,
  FaRegMoon,
} from "react-icons/fa";

export default function Header() {
  return (
    <Fragment>
      <nav
        id="topbar"
        className="topbar navbar navbar-expand navbar-light bg-white  mb-4 static-top shadow d-flex justify-content-between"
      >
        <div className="sidebars-button text-dark mr-auto">
          <i className="fa fa-bars bx bx-menu sidebarsBtn">
            <FaBars />
          </i>
          <span className="dashboard">AlQuran</span>
        </div>

        {/* <!-- Topbar Search --> */}
        <form className="d-none d-sm-inline-block form-inline ml-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-1 border-primary small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm">
                  <FaSearch />
                </i>
              </button>
            </div>
          </div>
        </form>

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw">
                <FaSearch />
              </i>
            </a>
            {/* <!-- Dropdown - Messages --> */}
            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm">
                        <FaSearch />
                      </i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          {/* <!-- Nav Item - Messages --> */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-envelope fa-fw">
                <FaEnvelope />
              </i>
              {/* <!-- Counter - Messages --> */}
              <span className="badge badge-danger badge-counter">7</span>
            </a>
            {/* <!-- Dropdown - Messages --> */}
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 className="dropdown-header">Message Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="img/undraw_profile_1.svg"
                    alt="..."
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div className="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="img/undraw_profile_2.svg"
                    alt="..."
                  />
                  <div className="status-indicator"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    I have the photos that you ordered last month, how would you
                    like them sent to you?
                  </div>
                  <div className="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="img/undraw_profile_3.svg"
                    alt="..."
                  />
                  <div className="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    Last month's report looks great, I am very happy with the
                    progress so far, keep up the good work!
                  </div>
                  <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't
                    good...
                  </div>
                  <div className="small text-gray-500">
                    Chicken the Dog · 2w
                  </div>
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                Read More Messages
              </a>
            </div>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item ">
            <a className="nav-link" href="#">
              <FaRegMoon />
              <span className="ms-1 d-none d-lg-inline text-gray-600 small">
                Dark
              </span>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              <FaCogs />
              <span className="ms-1 d-none d-lg-inline text-gray-600 small">
                Setings
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="alert alert-danger mx-4 text-center"
        style={{ marginTop: "100px" }}
        role="alert"
      >
        এই সাইট এর কাজ এখনও শেষ হইনি সুতরাং অনেক কিছু ঠিক ভাবে কাজ নাউ করতে
        পারে। আপনার মতামত দিতে{" "}
        <a
          href="https://www.facebook.com/photo?fbid=375507324584242&set=a.125115496290094"
          className="alert-link"
        >
          এখানে ক্লিক করুন।
        </a>
      </div>
    </Fragment>
  );
}
