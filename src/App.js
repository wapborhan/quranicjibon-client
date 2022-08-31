import React, { Component } from "react";
// import MainComponents from "./components/MainComponents";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./components/routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState((prevState) => ({
      ...prevState,
      isActive: !prevState.isActive,
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar isActive={this.state.isActive} />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavBar
                isActive={this.state.isActive}
                handleToggle={this.handleToggle}
              />
              <Routes>
                {routes.map((data, idx) => (
                  <Route
                    key={idx}
                    path={data.path}
                    element={data.component}
                    exact
                  />
                ))}

                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
