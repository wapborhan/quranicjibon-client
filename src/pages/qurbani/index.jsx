import React, { Fragment, Component } from "react";
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
            <QurbaniData />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default index;
