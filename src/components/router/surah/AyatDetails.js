import React, { Fragment } from "react";

export default function AyatDetails(props) {
  // console.log(props);

  return (
    <Fragment>
      {/* <div className="row m-0">
        <div className="col-md-6 p-0">
          <div className="head bg-dark text-light w-100 p-2 text-center">
            অনুবাদ
          </div>
          <ul className="ayat-list p-0">
            {props.ayatbn.map((ardata) => {
              return (
                <li className="text-left" key={ardata.id}>
                  {ardata.text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-5 p-0">
          <div className="head bg-dark text-light w-100 p-2 text-right">
            আয়াত
          </div>
          <ul className="ayat-list p-0">
            {props.ayatar.map((ardata) => {
              return (
                <li className="text-right" key={ardata.id}>
                  {ardata.ayat}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-1 p-0 w-100">
          <div className="head bg-dark text-light w-100 p-2 text-center">
            নম্বর
          </div>
          <ul className="ayat-list p-0">
            {props.ayatar.map((ardata) => {
              return (
                <li className="text-center" key={ardata.id}>
                  {ardata.VerseIDAr}
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
      <table className="border table-bordered">
        <thead>
          <th>অনুবাদ</th>
          <th>আয়াত</th>
          <th>নম্বর</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
