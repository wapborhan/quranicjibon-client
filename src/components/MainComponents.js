import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import NotFound from "./NotFound";
import SuraDetails from "./router/surah/SuraDetails";

import SuraList from "./router/surah/SuraList";

import SURAH from "./assets/data/SuraData";
import ayatAr from "./assets/data/ayatAr";

export default class MainComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surah: SURAH,
      selectedSura: null,
      ayatAr: ayatAr,
    };
  }

  selectedSuraHandler = (surano) => {
    const sura = this.state.surah.filter((item) => item.sura === surano)[0];
    this.setState({
      selectedSura: sura,
    });
    console.log(sura);
  };

  render() {
    let suras = (
      <HomePage
        suras={this.state.surah}
        selectSura={this.selectedSuraHandler}
      />
    );

    return (
      <div id="wrapper">
        <Routes>
          <Route path="/sura" exact element={suras}>
            <Route path="/sura/:sura" element={<SuraDetails />} />
          </Route>
          <Route path="/hadith" exact element={<HomePage />} />
          <Route path="/kalema" exact element={<HomePage />} />
          <Route path="/dowa" exact element={<HomePage />} />
          <Route path="/salat-time" exact element={<HomePage />} />
          <Route path="/ramjan" exact element={<HomePage />} />
          <Route path="/about" exact element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}
