import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";

const KalemaDetails = (props) => {
  // console.log(props.kalema);
  return (
    <div>
      <Card>
        <CardHeader>{props.kalema.name}</CardHeader>
        <CardBody>
          <div className="play-sura mt-2 mb-2">
            <AudioPlayer
              // autoPlay
              src={props.kalema.audio}
              onPlay={(e) => console.log("onPlay")}
              // other props here
            />
          </div>

          <div className="content mt-4">
            <h3 className="text-right mb-4">{props.kalema.kalemaAr}</h3>
            <p>
              <span>বাংলা উচ্চারণ -</span>
              <br />
              {props.kalema.kalemaBnU}
            </p>

            <p>
              <span>বাংলা অর্থ -</span>
              <br />
              {props.kalema.kalemaBnA}
            </p>

            <p>
              <span>English -</span>
              <br />
              {props.kalema.kalemaEn}
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default KalemaDetails;
