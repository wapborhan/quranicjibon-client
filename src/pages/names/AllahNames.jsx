import React from "react";
import NameList from "./NameList";

const AllahNames = ({ names }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4 py-5">
        {names && names.map((name) => <NameList name={name} key={name.id} />)}
      </div>
    </div>
  );
};

export default AllahNames;
