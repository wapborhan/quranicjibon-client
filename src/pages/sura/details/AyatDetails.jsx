import React, { Fragment } from "react";

const AyatDetails = (props) => {
  // console.log(props);
  return (
    <Fragment>
      <div className="table-responsive py-2">
        <table
          className="table table-bordered border-dark "
          style={{ width: "100%" }}
        >
          <thead className="border-light">
            <tr className="bg-dark text-light text-center">
              <th colSpan="2">আয়াত </th>
              <th> নম্বর</th>
            </tr>
          </thead>
          <tbody>
            {props.ayatar.map((item) => {
              // console.log(item);
              return (
                <Fragment key={item.id}>
                  <tr className="table-bordered border-dark">
                    <td
                      colSpan={2}
                      className="pd20 ar h3 text-end font-ar table-bordered border-dark"
                    >
                      {item.ayatAR}
                    </td>
                    <td
                      rowSpan={2}
                      scope="row"
                      className="align-items-center table-bordered "
                    >
                      {item.VerseIDAr}
                    </td>
                  </tr>
                  <tr>
                    <td className="pd20 ar text-right font-ar table-bordered ">
                      {/* {item.ayatEN} */}
                    </td>
                    <td className="pd20 ar text-right font-ar table-bordered ">
                      {/* {item.ayatBN} */}
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default AyatDetails;
