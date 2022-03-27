import React, { Component } from "react";
import SURAH from "../../assets/data/SuraData";
import ayatAr from "../../assets/data/ayatAr";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surah: SURAH,
      ayatAr: ayatAr,
    };
  }

  render() {
    var cardW = {
      width: "23rem",
    };
    return (
      <div className="table-responsive">
        <div className="d-flex flex-wrap">
          {this.state.surah.map((item) => {
            return (
              <div className="card m-2" style={cardW} key={item.sura_no}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between">
                      <div className="slno mt-3">
                        <div className="sl d-block">{item.sura_no}</div>
                        <div className="shape">.</div>
                      </div>
                      <div className="name">
                        <div className="name-bn">{item.sura_name}</div>
                        <div className="name-mn">{item.eng_name}</div>
                        <div className="ayath_count">
                          আয়াত: {item.total_ayat}
                        </div>
                      </div>
                    </div>
                    <div className="right">
                      <div className="name-ar">{item.ar_name}</div>
                      <div className="name-enbn">{item.enbn_name}</div>
                      <div className="type">ধরনঃ {item.type}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
