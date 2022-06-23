import React, { Fragment } from "react";
import QRDetails from "./QRDetails";
import Footer from "../../homepage/main/Footer";
import Header from "../../homepage/main/Header";
import SideBar from "../../homepage/sidebar/SideBar";

const Qurbani = () => {
  return (
    <Fragment>
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Header />
        <div className="container-fluid topbarpt">
          <QRDetails />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Qurbani;
