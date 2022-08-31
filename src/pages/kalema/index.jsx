import React, { Component } from "react";
import KALEMA from "../../assets/data/kalema/kalema";
import KalemaList from "./KalemaList";
import KalemaDetails from "./KalemaDetails";
import img1 from "../../assets/images/suratop.png";

export default class index extends Component {
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
      <div className="topbarpt">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="h5 mb-3 mt-4 font-weight-bold text-gray-800 font-ar">
                بِسْمِ اللَّـهِ الرَّ‌حْمَـٰنِ الرَّ‌حِيمِ
              </div>
              <div className="h5 mb-3 font-weight-bold text-gray-800">
                দয়াময় মেহেরবান আল্লাহর নামে
              </div>
              <div className="hed-imgd mb-3">
                <img src={img1} alt="Head-Image" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="kalema-list">
                <div className="card">
                  <div className="card-header h4">কালেমা সমুহ</div>
                  <ul className="list-group">
                    {this.state.kalema.map((item) => {
                      // console.log(item);
                      return (
                        <KalemaList
                          key={item.id}
                          kalema={item}
                          selecKalema={() =>
                            this.selectedKalemaHandler(item.id)
                          }
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="kalema-details">
                <KalemaDetails kalemaSelected={this.state.selectedKalema} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
