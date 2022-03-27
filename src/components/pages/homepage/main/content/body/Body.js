import React from "react";
import Table from "../../../../../router/surah/Table";
// import Desc from "./Desc";

export default function Body() {
  return (
    <div className="container-fluid topbarpt">
      {/* <!-- Content Row --> */}
      {/* <Desc /> */}
      {/* <!-- Content Row --> */}

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
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
