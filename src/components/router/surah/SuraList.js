import React from "react";
import { Link } from "react-router-dom";
import Sura from "./Sura";
var cardW = {
  width: "21rem",
};
export default function SuraList(props) {
  const suras = props.sura.suras;
  const selectSura = props.sura.selectSura;
  // console.log(props.sura.selectSura);
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
                selectSura(item.sura);
              }}
            />
          </Link>
        );
      })}
    </div>
  );
}
