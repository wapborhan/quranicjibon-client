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
            <h2 className="py-3">
              কুরবানীর সংক্রান্ত কিছু প্রশ্ন উত্তর
              <NavLink to="/qurbani-question">এখানে</NavLink>
            </h2>
            <QurbaniData />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default index;
