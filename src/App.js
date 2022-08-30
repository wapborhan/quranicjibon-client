import React, { useState, Component } from "react";
// import MainComponents from "./components/MainComponents";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  // const [isActive, setActive] = useState("false");
  // handleToggle = () => {
  //   this.setState({ isActive: true });
  // };
  render() {
    return (
      <BrowserRouter>
        <div id="wrapper">
          <div
            className={
              this.state.isActive
                ? "sidebars bg-dark text-light  "
                : "sidebars bg-dark text-light active"
            }
          >
            <Sidebar />
          </div>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <nav
                id="topbar"
                className="topbar navbar navbar-expand navbar-light bg-white  mb-4 static-top shadow d-flex justify-content-between px-4"
              >
                {/* <NavBar
                  handleToggle={this.handleToggle}
                  isActive={this.state.isActive}
                /> */}
              </nav>
              {/* <MainComponents /> */}
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
