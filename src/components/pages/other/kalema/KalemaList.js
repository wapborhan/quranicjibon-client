import React from "react";

const KalemaList = (props) => {
  // console.log(props);
  return (
    <li
      className="list-group-item list-group-item-action"
      style={{ cursor: "pointer" }}
      onClick={props.selectkalema}
    >
      <span>{props.kalema.id} - </span>
      {props.kalema.name}
    </li>
  );
};

export default KalemaList;
