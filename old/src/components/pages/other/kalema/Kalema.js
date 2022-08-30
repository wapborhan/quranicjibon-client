import React, { Component, Fragment } from "react";
import Footer from "../../homepage/main/Footer";
import Header from "../../homepage/main/Header";
import KalemaHeader from "./Kheader";
import Kbody from "./Kbody";
import SideBar from "../../homepage/sidebar/SideBar";
import KALEMA from "../../../assets/data/kalema/kalema";

class Kalema extends Component {
  state = {
    kalema: KALEMA,
    selectedKalema: {
      id: "1",
      name: "কালেমা তাইয়্যিবাহ",
      kalemaAr: "لآ اِلَهَ اِلّا اللّهُ مُحَمَّدٌ رَسُوُل اللّهِ",
      kalemaBnU: "লা-ইলা-হা ইল্লাল্লাহু মুহাম্মাদুর রাসূলুল্লাহ্।",
      kalemaBnA:
        "আল্লাহ ছাড়া কোন উপাস্য নাই, হযরত মুহাম্মাদ (সাঃ) তাঁহার প্রেরিত রাসুল।",
      kalemaEn:
        "There is no God but Allah, [and] Muhammad is the messenger of Allah.",
      audio:
        "https://al-quran.technobdapis.com/assets/media/kalima_audio/kalima_taiyaba.mp3",
    },
  };

  selectedKalemaHandler = (kalemas) => {
    const kalema = this.state.kalema.filter((item) => item.id === kalemas)[0];
    this.setState({
      selectedKalema: kalema,
    });
    // console.log(kalema);
  };

  render() {
    return (
      <Fragment>
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Header />
          <div className="container-fluid topbarpt">
            <KalemaHeader />
            <Kbody
              kalema={this.state.kalema}
              selecKalema={this.selectedKalemaHandler}
              kalemaSelected={this.state.selectedKalema}
            />
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Kalema;
