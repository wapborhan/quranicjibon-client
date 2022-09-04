import React, { Component } from "react";
import Alert from "./Alert";
import SuraList from "./SuraList";

const index = (props) => {
  // console.log(props);
  return (
    <div className="container-fluid topbarpt">
      <Alert />
      <div className="row">
        {/* <!-- Area Chart --> */}
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                আল কুরআন (সুরা ক্রমে)
              </h6>
            </div>
            {/* <!-- Card Body --> */}
            <div className="card-body">
              <SuraList suras={props.suras} selectSura={props.selectSura} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
