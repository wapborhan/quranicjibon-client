import React, { Fragment } from "react";
import Footer from "../../pages/homepage/main/Footer";
import Header from "../../pages/homepage/main/Header";
import SideBar from "../../pages/homepage/sidebar/SideBar";
import SuraDesc from "./SuraDesc";

export default function SuraDetails(props) {
  let audio = props.audio[0];
  // console.log(props);
  return (
    <Fragment>
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Header />
        <div className="container-fluid topbarpt">
          <SuraDesc ayatData={props} />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
