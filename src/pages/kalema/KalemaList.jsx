import React from "react";

const KalemaList = (props) => {
  return (
    <li
      className="list-group-item list-group-item-action radius-0"
      style={{ cursor: "pointer" }}
      onClick={props.selecKalema}
    >
      <span>{props.kalema.id} - </span>
      {props.kalema.name}
    </li>
  );
};

export default KalemaList;
