import React, { Fragment } from "react";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}
