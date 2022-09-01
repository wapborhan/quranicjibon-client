import React, { Component } from "react";
import ALLAH_NAMES from "../../assets/data/allah-name/data";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllahName: ALLAH_NAMES,
    };
  }
  render() {
    // console.log(this.state.AllahName);
    return (
      <div className="topbarpt">
        <div className="container">
          <div className="row">
            {this.state.AllahName.map((name) => {
              return (
                <div className="col md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="ar">{name.name_bn}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default index;
