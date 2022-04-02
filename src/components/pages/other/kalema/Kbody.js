import React from "react";
import { Link } from "react-router-dom";
import KalemaDetails from "./KalemaDetails";
import KalemaList from "./KalemaList";

const Kbody = (props) => {
  const kalema = props.kalema;
  const selectkalema = props.selecKalema;
  // console.log(props);

  return (
    <div className="row">
      <div className="col-md-3">
        <div className="kalema-list">
          <div className="card">
            <div className="card-header">কালেমা</div>
            <ul className="list-group">
              {kalema.map((item) => {
                // console.log(item);
                return (
                  <KalemaList
                    key={item.id}
                    kalema={item}
                    selectkalema={() => {
                      selectkalema(item.id);
                    }}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <div className="kalema-details">
          <KalemaDetails kalema={props.kalemaSelected} />
        </div>
      </div>
    </div>
  );
};

export default Kbody;
