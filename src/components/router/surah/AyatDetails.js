import React, { Fragment } from "react";

export default function AyatDetails(props) {
  console.log(props);

  return (
    <Fragment>
      <tr>
        <td>{props.ayaten}</td>
        <td className="pd20 ar text-right">
          {props.ayatar}
          <br />
          {props.ayatbn}
        </td>
        <td scope="row" className="align-items-center">
          {props.verse}
        </td>
      </tr>
    </Fragment>
  );
}
