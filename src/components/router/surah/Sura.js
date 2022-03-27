import React from "react";

export default function Sura(props) {
  // console.log(props);
  return (
    <div className="card-body" onClick={props.sura.selectSura}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between">
          <div className="slno mt-3">
            <div className="sl d-block">{props.sura.sura_no}</div>
            <div className="shape">.</div>
          </div>
          <div className="name">
            <div className="name-bn">{props.sura.sura_name}</div>
            <div className="name-mn">{props.sura.eng_name}</div>
            <div className="ayath_count">আয়াত: {props.sura.total_ayat}</div>
          </div>
        </div>
        <div className="right">
          <div className="name-ar">{props.sura.ar_name}</div>
          <div className="name-enbn">{props.sura.enbn_name}</div>
          <div className="type">ধরনঃ {props.sura.type}</div>
        </div>
      </div>
    </div>
  );
}
