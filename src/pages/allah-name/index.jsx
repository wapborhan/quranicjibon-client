import React, { Component } from "react";
import ALLAH_NAMES from "../../assets/data/allah-name/data";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllahName: ALLAH_NAMES,
    };
  }
  render() {
    // console.log(this.state.AllahName);
    return (
      <div className="topbarpt">
        <div className="container">
          <div className="row">
            {this.state.AllahName.map((name) => {
              return (
                <div className="col-md-4" key={name.id}>
                  <div className="card mt-3">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="name">
                          <div className="name-ar mb-2 text-start font-ar">
                            {name.name_ar}
                          </div>
                          <div className="translate">
                            উচ্চারণ - <strong>{name.name_bn}</strong>
                          </div>
                        </div>
                        <div className="play">
                          <AudioPlayer
                            autoPlay
                            src={name.path}
                            // onPlay={(e) => console.log("onPlay")}
                            showSkipControls={false}
                            showJumpControls={false}
                            showDownloadProgress={false}
                            showFilledVolume={false}
                            hasDefaultKeyBindings={false}
                            autoPlayAfterSrcChange={false}
                          />
                        </div>
                      </div>
                      <div className="meaning">
                        অর্থ - <strong>{name.meaning_bn}</strong>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default index;
