"use client";
import "../assets/stylesheet/homepage/all.min.css";
import "../assets/stylesheet/homepage/flaticon.css";
import "../assets/stylesheet/homepage/color.css";
import "../assets/stylesheet/homepage/responsive.css";
import "../assets/stylesheet/homepage/slick.css";
import "../assets/stylesheet/custom.css";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import Listen from "./listen/Listen";
import Quran from "./quran/Quran";
import Counter from "./counter/Counter";
import Pillar from "./pillar/Pillar";
import Footer from "./footer/Footer";
import Prayer from "./prayer/Prayer";

const Homepage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Prayer />
      <Listen />
      <Quran />
      <Counter />
      <Pillar />
      <Footer />
    </>
  );
};

export default Homepage;
