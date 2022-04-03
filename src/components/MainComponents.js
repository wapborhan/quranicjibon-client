import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// Data
import SURAH from "./assets/data/quran/SuraData";
import AUDIO from "./assets/data/quran/SuraAudio";
import ayatAr from "./assets/data/quran/ayatAr";
import ayatBr from "./assets/data/quran/ayatBr";
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
      audio: AUDIO,
      ayatArData: ayatAr,
      ayatBnData: ayatBr,
      selectedSura: null,
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
    let audio = null;
    let ayatArdetails = null;
    let ayatBndetails = null;

    // Audio Filter
    if (this.state.selectedSura != null) {
      const audios = this.state.audio.filter((audio) => {
        return audio.sura === this.state.selectedSura.sura;
      });
      audio = audios;
    }

    // Arbi Ayat Filter
    if (this.state.selectedSura != null) {
      const ayat = this.state.ayatArData.filter((ayat) => {
        return ayat.sura === this.state.selectedSura.sura;
      });
      ayatArdetails = ayat;
    }
    // Bangla Ayat Filter
    if (this.state.selectedSura != null) {
      const ayat = this.state.ayatBnData.filter((ayat) => {
        return ayat.sura === this.state.selectedSura.sura;
      });
      ayatBndetails = ayat;
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
                audio={audio}
                ayatar={ayatArdetails}
                ayatbn={ayatBndetails}
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
