import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const NameFajilot = (props) => {
  const AllahNames = props.name;
  // console.log(props);
  return (
    <Card>
      <CardBody>
        <CardText tag="h1" className="mt-3 d-flex justify-content-between">
          <div className="ar w-75"> {AllahNames.name_ar}</div>
          <AudioPlayer
            autoPlay
            src={AllahNames.path}
            onPlay={(e) => console.log("onPlay")}
            showJumpControls={false}
            showFilledProgress={false}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            defaultCurrentTime=" "
            defaultDuration=" "
            layout="horizontal-reverse"
          />{" "}
        </CardText>
        <CardTitle tag="h5"></CardTitle>
        <CardSubtitle
          className="mb-2 text-muted d-block justify-content-start"
          tag="h6"
        >
          <div className="translate mb-2 mt-3">
            উচ্চারণ - <strong>{AllahNames.name_bn}</strong>
          </div>

          <div className="meaning">
            অর্থ - <strong>{AllahNames.meaning_bn}</strong>
          </div>
        </CardSubtitle>{" "}
        <hr />
        <CardText>আমল: {AllahNames.fojilot}</CardText>
      </CardBody>
    </Card>
  );
};

export default NameFajilot;
