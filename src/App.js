import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Data
import SURAH from "./assets/data/quran/SuraData";
import AYATH from "./assets/data/quran/ayat";
import QurbaniQuestionData from "./assets/data/qurbani/index";
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
  Qurbani,
  QurbaniDetails,
  QurbaniQuestion,
  Answer,
  Tasbih,
  PrayerTime,
  NotFound,
} from "./pages";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surah: SURAH,
      ayath: AYATH,
      selectedSura: null,
      question: QurbaniQuestionData,
      selectedQues: null,
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

  selectedQuesHandler = (ques) => {
    const question = this.state.question.filter((item) => item.id === ques)[0];
    this.setState({
      selectedQues: question,
    });
  };

  render() {
    let ayatArdetails = null;

    // Arbi Ayat Filter
    if (this.state.selectedSura != null) {
      const ayat = this.state.ayath.filter((ayat) => {
        return ayat.sura === this.state.selectedSura.sura;
      });
      ayatArdetails = ayat;
    }
    // console.log(this.state.ayath);
    // console.log(this.state.QRquestion);
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
                      ayatar={ayatArdetails}
                      // ayatbn={ayatBndetails}
                    />
                  }
                  exact
                />
                <Route path="/allah-names" element={<AllahName />} exact />
                <Route path="/kalema" element={<Kalema />} exact />
                <Route path="/qurbani" element={<Qurbani />} exact />
                <Route
                  path="/qurbani-details"
                  element={<QurbaniDetails />}
                  exact
                />{" "}
                <Route
                  path="/qurbani-question"
                  element={
                    <QurbaniQuestion
                      data={this.state.question}
                      selectedQuesHandler={this.selectedQuesHandler}
                    />
                  }
                  exact
                />
                <Route
                  path="/question/:id"
                  element={<Answer data={this.state.selectedQues} />}
                  exact
                />
                <Route path="/tasbih" element={<Tasbih />} exact />
                <Route path="/prayer-time" element={<PrayerTime />} exact />
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
