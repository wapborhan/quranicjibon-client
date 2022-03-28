import React, { Fragment } from "react";

export default function AyatDetails(props) {
  // console.log(props.ayatar);
  return (
    <div class="table-responsive py-5">
      <table className="table table-bordered table-striped">
        <tbody>
          <tr className="table-dark">
            <th scope="col">Ayat No.</th>
            <th scope="col">Translate</th>
            <th scope="col">Ayat</th>
          </tr>
          {props.ayatar.map((ayatar) => {
            console.log(ayatar);

            return (
              <Fragment>
                <tr key={ayatar.id}>
                  <td className="bn bn-aya ">বাংলা আসছে</td>
                  <td className="pd20 ar text-right">{ayatar.ayat}</td>
                  <td scope="row" className="align-items-center" rowSpan={2}>
                    {ayatar.VerseIDAr}
                  </td>
                </tr>

                <tr>
                  <td className="en-aya">English Cooming Soon</td>
                  <td className="bn bn-aya text-right">banglish asbe</td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
