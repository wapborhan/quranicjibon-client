import React, { Fragment } from "react";
import Footer from "../../homepage/main/Footer";
import Header from "../../homepage/main/Header";
import KalemaHeader from "./Kheader";
import SideBar from "../../homepage/sidebar/SideBar";

export default function Kalema() {
  return (
    <Fragment>
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Header />
        <div className="container-fluid topbarpt">
          <KalemaHeader />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
