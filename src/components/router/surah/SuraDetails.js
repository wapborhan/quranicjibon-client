import React, { Fragment } from "react";
import Footer from "../../pages/homepage/main/Footer";
import Header from "../../pages/homepage/main/Header";
import SideBar from "../../pages/homepage/sidebar/SideBar";
import SuraDesc from "./SuraDesc";

export default function SuraDetails(props) {
  console.log(props.sura);
  return (
    <Fragment>
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Header />
        <div className="container-fluid topbarpt">
          <SuraDesc suraData={props.sura} />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
