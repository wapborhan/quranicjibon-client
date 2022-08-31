import React, { Component } from "react";
import Alert from "./Alert";
import SuraList from "./SuraList";
// Data
import SURAH from "../../assets/data/quran/SuraData";
import AUDIO from "../../assets/data/quran/SuraAudio";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surah: SURAH,
      audio: AUDIO,
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
    // Audio Filter
    if (this.state.selectedSura != null) {
      const audios = this.state.audio.filter((audio) => {
        return audio.sura === this.state.selectedSura.sura;
      });
      audio = audios;
    }
    return (
      <div className="container-fluid topbarpt">
        <Alert />
        <div className="row">
          {/* <!-- Area Chart --> */}
          <div className="col-xl-12 col-lg-12">
            <div className="card shadow mb-4">
              {/* <!-- Card Header - Dropdown --> */}
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  আল কুরআন (সুরা ক্রমে)
                </h6>
              </div>
              {/* <!-- Card Body --> */}
              <div className="card-body">
                <SuraList
                  suras={this.state.surah}
                  selectSura={this.selectedSuraHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
