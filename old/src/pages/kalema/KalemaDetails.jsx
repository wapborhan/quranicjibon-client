import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const KalemaDetails = (props) => {
  const kalema = props.kalemaSelected;
  return (
    <div>
      <div className="card">
        <div className="card-header"> {kalema.name} </div>
        <div className="card-body">
          <div className="play-sura mt-2 mb-2">
            <AudioPlayer
              // autoPlay
              src={kalema.audio}
              onPlay={(e) => console.log("onPlay")}
              // other props here
            />
          </div>

          <div className="content mt-4">
            <h3 className="text-right mb-4 font-ar">{kalema.kalemaAr}</h3>
            <p>
              <span>বাংলা উচ্চারণ -</span>
              <br />
              {kalema.kalemaBnU}
            </p>

            <p>
              <span>বাংলা অর্থ -</span>
              <br />
              {kalema.kalemaBnA}
            </p>

            <p>
              <span>English -</span>
              <br />
              {kalema.kalemaEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KalemaDetails;
