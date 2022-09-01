import React, { Component } from "react";
import ALLAH_NAMES from "../../assets/data/allah-name/data";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import NameList from "./NameList";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllahName: ALLAH_NAMES,
    };
  }
  selectedNameHandler = (names) => {
    const AllahName = this.state.AllahName.filter(
      (item) => item.id === names
    )[0];
    this.setState({
      selectedName: AllahName,
    });
  };
  render() {
    return (
      <div className="topbarpt">
        <div className="container">
          <div className="row">
            {this.state.AllahName.map((allnames) => {
              return (
                <NameList
                  key={allnames.id}
                  names={allnames}
                  selecName={() => this.selectedNameHandler(allnames.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default index;
