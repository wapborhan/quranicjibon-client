import React, { Component } from "react";

import { ModalHeader, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
// page
import ALLAH_NAMES from "../../assets/data/allah-name/data";
import NameList from "./NameList";
import NameFajilot from "./NameFajilot";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllahName: ALLAH_NAMES,
      selectedName: null,
      modalOpen: false,
    };
  }
  onDishSelect = (name) => {
    this.setState({ selectedName: name, modalOpen: !this.state.modalOpen });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };
  render() {
    const names = this.state.AllahName.map((allnames) => {
      return (
        <NameList
          key={allnames.id}
          names={allnames}
          selectName={() => {
            this.onDishSelect(allnames);
          }}
        />
      );
    });

    //

    let namefojilot = null;
    // if (this.state.selectedName != null) {
    //   const allahnames = this.state.allahnames.filter((name) => {
    //     return name.id === this.state.selectedName.id;
    //   });
    namefojilot = (
      <NameFajilot
        name={this.state.selectedName}
        // names={allahnames}
      />
    );
    // }
    return (
      <div className="topbarpt">
        <div className="container">
          <div className="row">{names}</div>
          <Modal size="md" isOpen={this.state.modalOpen}>
            <ModalHeader toggle={this.toggleModal} charCode="close">
              <span>ফজিলত</span>
            </ModalHeader>
            <ModalBody>{namefojilot}</ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
export default index;
