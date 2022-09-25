import React, { Fragment, Component } from "react";
import { NavLink } from "react-router-dom";
import QurbaniData from "./QurbaniData";
import QurbaniDetails from "./QurbaniDetails";

import Form from "./Form";

class index extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="topbarpt">
            <Form />
            <div className="card shadow ">
              <div className="card-body text-center">
                <h2>
                  কুরবানীর সংক্রান্ত কিছু প্রশ্ন উত্তর{" "}
                  <NavLink className="text-danger" to="/qurbani-question">
                    এখানে
                  </NavLink>
                </h2>
              </div>
            </div>
            <QurbaniData />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default index;
