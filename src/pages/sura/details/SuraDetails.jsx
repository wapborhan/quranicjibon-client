import React, { Fragment } from "react";

const SuraDetails = () => {
  const sura = "";
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
            <div className="hed-imgd">
              <img
                src="/images/ornate-designs.png"
                alt="Head-Image"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <div className="surano w-25">1{sura.sura_no}</div>
                  <div className="suraname w-75">
                    <div className="d-block">
                      <div className="banglaname">
                        <span className=" font-ar">{sura.ar_name}AR</span>
                      </div>
                      <div className="banglaname">
                        {sura.sura_name} - {sura.enbn_name} - {sura.eng_name} -{" "}
                        {sura.bn_name}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <div className="surano w-25">Icon</div>
                  <div className="suraname w-75">
                    <div className="d-block">
                      <div className="banglaname">আয়াতঃ {sura.total_ayat}</div>
                      <div className="banglaname">রুকুঃ {sura.ruku}</div>
                      <div className="banglaname">ধরনঃ {sura.type}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="play-sura mt-2 mb-2">
              {/* <AudioPlayer
                      className="w-sm-100 w-lg-100 mx-auto"
                      // autoPlay
                      src={src.audio}
                      onPlay={(e) => console.log("onPlay")}
                      // other props here
                    /> */}
            </div>
          </div>
        </div>

        {/* <AyatDetails ayatar={ayatar} ayatbn={ayatbn} /> */}
      </div>
    </div>
  );
};

export default SuraDetails;
