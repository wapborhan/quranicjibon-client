import React from "react";
import Content from "./content/Content";
import Footer from "./footer/Footer";

export default function MainContent() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <Content />
      <Footer />
    </div>
  );
}
