import React from "react";
import { Link } from "react-router-dom";
import Sura from "./Sura";
var cardW = {
  width: "23rem",
};
export default function SuraList(props) {
  const suras = props.sura.suras;
  // console.log(props.sura);
  return (
    <div className="d-flex flex-wrap">
      {suras.map((item) => {
        return (
          <Link
            to={"/sura/" + item.sura}
            className="card m-2 card-lin"
            style={cardW}
            key={item.sura_no}
          >
            <Sura
              sura={item}
              selectSura={() => {
                props.selectSura(item.sura);
              }}
            />
          </Link>
        );
      })}
    </div>
  );
}
