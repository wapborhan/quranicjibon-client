import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../../assets/images/suratop.png";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaKaaba, FaMosque } from "react-icons/fa";
import AyatDetails from "./AyatDetails";

const SuraDetails = (props) => {
  console.log(props.ayatar);

  const sura = props.sura;
  if (sura == null) {
    return (
      <div className="topbarpt d-flex justify-content-center mt-5 mb-5">
        <NavLink to="/" className="btn  btn-success mt-5 mb-5">
          HomePage
        </NavLink>
      </div>
    );
  }
  const src = sura.audio;
  const types = sura.type;

  const makka = types === "মাক্কী" ? <FaKaaba /> : <FaMosque />;
  return (
    <div className="topbarpt">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            {/* <div className="h5 mb-3 mt-4 font-weight-bold text-gray-800 font-ar">
              بِسْمِ اللَّـهِ الرَّ‌حْمَـٰنِ الرَّ‌حِيمِ
            </div> */}
            <div className="h5 mb-3 font-weight-bold text-gray-800">
              দয়াময় মেহেরবান আল্লাহর নামে
            </div>
          </div>
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 col-md-3">
                    <div className="surano text-center h1"> {makka} </div>
                  </div>
                  <div className="col-sm-12 col-md-9">
                    <div className="d-flex">
                      <div className="suraname left w-75">
                        <div className="d-block">
                          <div className="banglaname">
                            {sura.sura_no} -
                            <span className="name-ar font-ar">
                              {" "}
                              {sura.ar_name}
                            </span>
                          </div>
                          <div className="banglaname">
                            {sura.sura_name} - {sura.enbn_name} <br />{" "}
                            {sura.eng_name} - {sura.bn_name}{" "}
                          </div>
                        </div>
                      </div>
                      <div className="suraname right w-25   ">
                        <div className="d-block">
                          <div className="banglaname">
                            আয়াতঃ {sura.total_ayat}
                          </div>
                          <div className="banglaname">রুকুঃ {sura.ruku}</div>
                          <div className="banglaname">ধরনঃ {sura.type}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <AudioPlayer
                  className="w-sm-100 w-lg-100 mx-auto"
                  // autoPlay
                  src={src}
                  onPlay={(e) => console.log("onPlay")}
                  // other props here
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="text-center">
              <div className="hed-imgd mt-3 mb-2">
                <img src={img1} alt="Head-Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <AyatDetails ayatar={props.ayatar} />
      </div>
    </div>
  );
};

export default SuraDetails;
