"use client";
import "../assets/stylesheet/homepage/all.min.css";
import "../assets/stylesheet/homepage/flaticon.css";
import "../assets/stylesheet/homepage/color.css";
import "../assets/stylesheet/homepage/responsive.css";
import "../assets/stylesheet/homepage/slick.css";
import "../assets/stylesheet/custom.css";
import Banner from "./home/header/Banner";
import Header from "./home/header/Header";
import Listen from "./home/listen/Listen";
import Quran from "./home/quran/Quran";
import Counter from "./home/counter/Counter";
import Pillar from "./home/pillar/Pillar";
import Footer from "./home/footer/Footer";
import Prayer from "./home/prayer/Prayer";

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
