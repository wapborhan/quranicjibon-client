import React, { Fragment } from "react";

export default function AyatDetails(props) {
  // console.log(props);

  const ayatbn = props.ayatbn.map((itembn) => {
    return <td>{itembn.text}</td>;
  });

  return (
    <Fragment>
      <div className="table-responsive py-2">
        <table
          className="table table-bordered  border-danger "
          style={{ width: "100%" }}
        >
          <thead>
            <tr className="bg-dark text-light text-center">
              {/* <th scope="col" className="text-center" style={{ width: "40%%" }}>
                অনুবাদ
              </th> */}
              <th scope="col" style={{ width: "55%%" }}>
                আয়াত
              </th>
              <th scope="col" style={{ width: "5%%" }}>
                নম্বর
              </th>
            </tr>
          </thead>
          <tbody>
            {props.ayatar.map((item) => {
              // console.log(item);
              return (
                <Fragment key={item.id}>
                  <tr className="table-bordered border-warning">
                    {/* <td className="bn bn-aya ">বাংলা আসছে</td> */}
                    <td className="pd20 ar text-right font-ar table-bordered border-danger">
                      {item.ayat}
                    </td>
                    <td
                      scope="row"
                      className="align-items-center table-bordered border-danger"
                    >
                      {item.VerseIDAr}
                    </td>
                  </tr>
                  <tr></tr>
                  {/* <tr>
                    <td className="en-aya">English Cooming Soon</td>
                    <td className="bn bn-aya text-right">banglish asbe</td>
                  </tr> */}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
