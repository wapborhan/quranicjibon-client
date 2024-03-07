"use client";
import Banner from "./home/header/Banner";
import { Header } from "./home/header/Header";
import Listen from "./home/listen/Listen";
import Quran from "./home/quran/Quran";
import "../assets/stylesheet/homepage/all.min.css";
import "../assets/stylesheet/homepage/flaticon.css";
import "../assets/stylesheet/homepage/color.css";
import "../assets/stylesheet/homepage/responsive.css";
import "../assets/stylesheet/homepage/slick.css";
import "../assets/stylesheet/custom.css";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Listen />
      <Quran />
    </div>
  );
};

export default Homepage;
