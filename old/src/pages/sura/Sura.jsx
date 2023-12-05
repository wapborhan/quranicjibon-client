import React from "react";

const Sura = (props) => {
  return (
    <div className="card mt-3 brdhvr" onClick={props.selectSura}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between">
            <div className="slno mt-1">
              <div className="sl d-block">{props.sura.sura_no}</div>
              <div className="shape"></div>
            </div>
            <div className="name">
              <div className="name-bn mb-2">{props.sura.sura_name}</div>
              <div className="ayath_count">আয়াত: {props.sura.total_ayat}</div>
            </div>
          </div>
          <div className="right">
            <div className="name-ar mb-2 font-ar lh-1">
              {props.sura.ar_name}
            </div>
            <div className="name-enbn">{props.sura.enbn_name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sura;
