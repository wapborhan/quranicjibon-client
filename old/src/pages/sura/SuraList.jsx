import React from "react";
import Sura from "./Sura";
import { Link } from "react-router-dom";

const SuraList = (props) => {
  const suras = props.suras;
  const selectSura = props.selectSura;

  return (
    <div className="row">
      {suras.map((item) => {
        return (
          <Link
            to={"" + item.sura}
            className="col-md-4 card-lin"
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
};

export default SuraList;
