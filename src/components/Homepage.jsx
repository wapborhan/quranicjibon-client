"use client";

import Banner from "./home/banner/Banner";
import { Header } from "./home/header/Header";
import Listen from "./home/listen/Listen";
import Quran from "./home/quran/Quran";

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
