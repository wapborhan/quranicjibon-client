import React, { Component } from "react";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      prayer_time: [],
    };
  }

  render() {
    let d = new Date();
    let day = d.getDay();
    let year = d.getFullYear();
    let latitude = 23.894946523675458;
    let longitude = 89.11457994193294;
    let timezonestring = "Asia/Dhaka";
    let method = 1;
    let school = 1;
    let month = d.getMonth();

    // let url = `https://api.aladhan.com/v1/calendar?year=${year}&latitude=${latitude}&longitude=${longitude}&timezonestring=${timezonestring}&method=${method}&school=${school}&month=August`;
    let url = `https://api.aladhan.com/v1/calendar?year=2022&latitude=23.894946523675458&longitude=89.11457994193294&timezonestring=Asia/Dhaka&method=1&school=1&month=september`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if ((res.status = "OK")) {
          const prayerTimeData = res.data;
          console.log(prayerTimeData);
        }
      });

    return <div>index</div>;
  }
}
