import React, { Fragment } from "react";
import Footer from "../../homepage/main/Footer";
import Header from "../../homepage/main/Header";
import SideBar from "../../homepage/sidebar/SideBar";

const About = () => {
  return (
    <Fragment>
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Header />
        <div className="container-fluid topbarpt">Loading .....</div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default About;
