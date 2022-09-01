import React, { Fragment } from "react";

const NameList = (props) => {
  // console.log(props);
  const name = props.names;

  return (
    <div
      className="col-md-4"
      style={{ cursor: "pointer" }}
      onClick={props.selectName}
      key={name.id}
    >
      <div className="card mt-3 brdhvr">
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
            <div className="play">.</div>
          </div>
          <div className="meaning">
            অর্থ - <strong>{name.meaning_bn}</strong>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameList;
