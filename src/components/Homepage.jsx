"use client";

import Banner from "./home/banner/Banner";
import { Header } from "./home/header/Header";
import Listen from "./home/listen/Listen";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Listen />
    </div>
  );
};

export default Homepage;
