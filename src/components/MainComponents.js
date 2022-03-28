import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
      ayatArData: ayatAr,
    };
  }

  selectedSuraHandler = (surano) => {
    const sura = this.state.surah.filter((item) => item.sura === surano)[0];
    this.setState({
      selectedSura: sura,
    });
    // console.log(sura);
  };

  render() {
    let ayatardetails = null;
    if (this.state.selectedSura != null) {
      const ayatar = this.state.ayatArData.filter((ayat) => {
        return ayat.sura === this.state.selectedSura.sura;
      });
      ayatardetails = ayatar;
    }

    return (
      <div id="wrapper">
        <Routes>
          <Route
            path="/sura"
            exact
            element={
              <HomePage
                suras={this.state.surah}
                selectSura={this.selectedSuraHandler}
              />
            }
          />
          <Route path="/" element={<Navigate replace to="/sura" />} />
          <Route
            path="/sura/:sura"
            exact
            element={
              <SuraDetails
                sura={this.state.selectedSura}
                ayatar={ayatardetails}
              />
            }
          />
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
