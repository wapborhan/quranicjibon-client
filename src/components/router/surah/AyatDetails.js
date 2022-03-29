import React, { Fragment } from "react";

export default function AyatDetails(props) {
  console.log(props.ayat);

  return (
    <div className="table-responsive py-2">
      <table
        className="table table-bordered border-warning table-striped "
        style={{ width: "100%" }}
      >
        <thead>
          <tr className="bg-dark text-light text-center">
            <th scope="col" className="text-center" style={{ width: "40%" }}>
              অনুবাদ
            </th>
            <th scope="col" style={{ width: "55%" }}>
              আয়াত
            </th>
            <th scope="col" style={{ width: "5%" }}>
              নম্বর
            </th>
          </tr>
        </thead>
        <tbody>
          {props.ayat.map((ayat) => {
            console.log(ayat);
            return (
              <Fragment>
                <tr>
                  <td className="pd20 ar text-right" colSpan={2}>
                    {ayat.text_ar}
                  </td>
                  <td scope="row" className="align-items-center">
                    {ayat.VerseIDAr}
                  </td>
                </tr>

                <tr>
                  <td className="en-aya">{ayat.text_bn}</td>
                  <td className="en-aya">{ayat.text_en}</td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
