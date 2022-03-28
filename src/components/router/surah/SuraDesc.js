import React from "react";

export default function SuraDesc(props) {
  const sura = props.suraData;
  console.log(props.suraData.sura_name);
  return (
    <div className="row">
      <div className="col-xl-12 col-md-12 mb-4">
        <div className=" h-100 py-2">
          <div className="card-body text-center">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="h3 font-weight-bold text-success text-uppercase mb-1">
                  {sura.sura_no}. {sura.sura_name}
                </div>
                <div className="h4 font-weight-bold text-success text-uppercase mb-1">
                  {sura.ar_name} - {sura.enbn_name} - {sura.eng_name}
                </div>
                <div className="h5 mb-3 mt-4 font-weight-bold text-gray-800">
                  আয়াতঃ {sura.total_ayat}, রুকুঃ {}, ({sura.type})
                </div>
                <div className="play-sura mt-2 mb-3">
                  <button>Play Sura</button>
                </div>
                <div className="h5 mb-3 mt-5 font-weight-bold text-gray-800">
                  بِسْمِ اللَّـهِ الرَّ‌حْمَـٰنِ الرَّ‌حِيمِ
                </div>
                <div className="h5 mb-3 font-weight-bold text-gray-800">
                  দয়াময় মেহেরবান আল্লাহর নামে
                </div>
                <div className="hed-imgd">
                  <img src="/images/ornate-designs.png" alt="Head-Image" />
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
