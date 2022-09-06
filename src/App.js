import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Data
import SURAH from "./assets/data/quran/SuraData";
import AYATH from "./assets/data/quran/SuraAudio";
//Components
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
//Pages
import {
  About,
  SuraMainPage,
  SuraDetails,
  AllahName,
  Kalema,
  Tasbih,
  NotFound,
} from "./pages";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surah: SURAH,
      ayath: AYATH,
      selectedSura: null,
      isActive: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState((prevState) => ({
      ...prevState,
      isActive: !prevState.isActive,
    }));
  }

  selectedSuraHandler = (surano) => {
    const sura = this.state.surah.filter((item) => item.sura === surano)[0];
    this.setState({
      selectedSura: sura,
    });
    // console.log(sura);
  };

  render() {
    // let audio = null;
    // let ayatArdetails = null;
    // let ayatBndetails = null;

    // Audio Filter
    // if (this.state.selectedSura != null) {
    //   const audios = this.state.audio.filter((audio) => {
    //     return audio.sura === this.state.selectedSura.sura;
    //   });
    //   audio = audios;
    // }

    // // Arbi Ayat Filter
    // if (this.state.selectedSura != null) {
    //   const ayat = this.state.ayatArData.filter((ayat) => {
    //     return ayat.sura === this.state.selectedSura.sura;
    //   });
    //   ayatArdetails = ayat;
    // }
    // // Bangla Ayat Filter
    // if (this.state.selectedSura != null) {
    //   const ayat = this.state.ayatBnData.filter((ayat) => {
    //     return ayat.sura === this.state.selectedSura.sura;
    //   });
    //   ayatBndetails = ayat;
    // }

    return (
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar isActive={this.state.isActive} />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavBar
                isActive={this.state.isActive}
                handleToggle={this.handleToggle}
              />
              <Routes>
                <Route path="/" element={<Navigate replace to="/sura" />} />
                <Route
                  path="/sura"
                  exact
                  element={
                    <SuraMainPage
                      suras={this.state.surah}
                      selectSura={this.selectedSuraHandler}
                    />
                  }
                />
                <Route
                  path="/sura/:sura"
                  element={
                    <SuraDetails
                      sura={this.state.selectedSura}
                      // audio={audio}
                      // ayatar={ayatArdetails}
                      // ayatbn={ayatBndetails}
                    />
                  }
                  exact
                />
                <Route path="/allah-names" element={<AllahName />} exact />
                <Route path="/kalema" element={<Kalema />} exact />
                <Route path="/tasbih" element={<Tasbih />} exact />
                <Route path="/about" element={<About />} exact />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
