import React, { Component } from "react";
import SURAH from "../../data/SuraData";
import ayatAr from "../../data/ayatAr";
import axios from "axios";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surah: SURAH,
      ayatAr: ayatAr,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="table-responsive py-5">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark text-center">
              <tr>
                <th scope="col">Surah No.</th>
                <th colSpan={2} scope="col">
                  Surah Name{" "}
                </th>
                <th scope="col">Total Ayath</th>
                <th scope="col">Descended</th>
              </tr>
            </thead>
            <tbody>
              {this.state.surah.map((item) => {
                return (
                  <tr key={item.sura_no}>
                    <th scope="row">{item.sura_no}</th>
                    <td>{item.sura_name} </td>
                    <td>{item.eng_name} </td>
                    <td>{item.total_ayat}</td>
                    <td> </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
