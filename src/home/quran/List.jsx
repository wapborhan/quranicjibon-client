import React, { useState } from "react";
import suraData from "../../assets/data/quran/SuraData";

import { FaKaaba, FaMosque } from "react-icons/fa";

const List = () => {
  const [allsura, setAllsura] = useState(suraData);
  const suras = allsura.filter((month, idx) => idx < 6);
  return (
    <div className="learn-post-wrap w-100">
      <div className="row">
        {suras.map((item) => {
          return (
            <div className="col-md-6 col-sm-6 col-lg-6" key={item.sura}>
              <div className="learn-post mb-5 d-flex flex-wrap align-items-center">
                <div className="learn-post-img">
                  <i>{item.type === "মাক্কী" ? <FaKaaba /> : <FaMosque />}</i>
                </div>
                <div className="learn-post-info">
                  <h4 className="mb-0">
                    <a href="#" title="">
                      {item.ar_name}
                    </a>
                  </h4>
                  <span className="d-block">{item.sura_name}</span>
                  <a href="#" title="">
                    Download PDF
                    <i className="fas fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
