import React from "react";

export default function Table() {
  return (
    <div className="container">
      <div className="table-responsive py-5">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Surah No.</th>
              <th scope="col">Surah Name</th>
              <th scope="col">Total Ayath</th>
              <th scope="col">Descended</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Al-Fatiha</td>
              <td>7</td>
              <td>Makka</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
