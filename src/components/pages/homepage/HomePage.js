import React, { Fragment } from "react";
import SideBar from "./sidebar/SideBar";
import Footer from "../homepage/main/Footer";
import Header from "../homepage/main/Header";
import Body from "./main/Body";

export default function HomePage(props) {
  // console.log(props);
  return (
    <Fragment>
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Header />
        <Body sura={props} />
        <Footer />
      </div>
    </Fragment>
  );
}
