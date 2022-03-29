import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// Data
import SURAH from "./assets/data/SuraData";
import ayatAr from "./assets/data/ayatAr";
import AllAyat from "./assets/data/ayat";
// Page
import HomePage from "./pages/homepage/HomePage";
import NotFound from "./NotFound";
import SuraDetails from "./router/surah/SuraDetails";
import Dowa from "./pages/other/dowa/Dowa";
import Ramjan from "./pages/other/ramjan/Ramjan";
import SalatTime from "./pages/other/salat-time/SalatTime";
import Kalema from "./pages/other/kalema/Kalema";
import Hadith from "./pages/other/hadith/Hadith";

export default class MainComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surah: SURAH,
      selectedSura: null,
      ayatArData: ayatAr,
      ayatBrData: AllAyat,
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
    let ayatbrdetails = null;

    // Arbi Ayat Filter
    if (this.state.selectedSura != null) {
      const ayatar = this.state.ayatArData.filter((ayat) => {
        return ayat.sura === this.state.selectedSura.sura;
      });
      ayatardetails = ayatar;
    }

    // Bangla Ayat Filter
    if (this.state.selectedSura != null) {
      const ayatbr = this.state.ayatBrData.filter((ayat) => {
        return ayat.sura === this.state.selectedSura.sura;
      });
      ayatbrdetails = ayatbr;
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
                ayatbr={ayatbrdetails}
              />
            }
          />
          <Route path="/hadith" exact element={<Hadith />} />
          <Route path="/kalema" exact element={<Kalema />} />
          <Route path="/dowa" exact element={<Dowa />} />
          <Route path="/salat-time" exact element={<SalatTime />} />
          <Route path="/ramjan" exact element={<Ramjan />} />
          <Route path="/about" exact element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}
