import React, { Component, Fragment } from "react";
import "../assets/stylesheet/homepage/color.css";
import "../assets/stylesheet/homepage/perfect-scrollbar.css";
import "../assets/stylesheet/homepage/responsive.css";
import "../assets/stylesheet/homepage/slick.css";
import "../assets/stylesheet/homepage/style.css";
import Header from "./header";
import Banner from "./banner";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Banner />
        </main>
      </Fragment>
    );
  }
}
