import React, { Component } from "react";

import axios from "axios";
import location from "browser-location";
import Contents from "./Contents";
// import Contents from "./contents.js";
const GOOGLE_API_KEY = "AIzaSyDMeMwbYMk2DOf2rOBVK6VhPA_PO4kdBHw";

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      term: null,
      location: null,
      lat: 23.897144493916453,
      long: 89.11046038653564,
      timestamp: new Date().getTime(),
      prayerTime: null,
      currentPrayer: null,
    };
  }

  componentDidMount() {
    const time = Math.round(this.state.timestamp / 1000);
    axios
      .get(
        `//api.aladhan.com/v1/timings/${time}?latitude=${this.state.lat}&longitude=${this.state.long}`
      )
      .then((response) => {
        // console.log(response);
        const data = response.data.data.timings;
        this.setState({
          prayerTime: [
            { time: ["সেহরী শেষ", data.Imsak] },
            { time: ["ফজর", data.Fajr] },
            { time: ["সূর্যোদয়", data.Sunrise] },
            { time: ["জোহর", data.Dhuhr] },
            { time: ["আছর", data.Asr] },
            { time: ["সূর্যাস্ত", data.Sunset] },
            { time: ["মাগরিব", data.Maghrib] },
            { time: ["এশা", data.Isha] },
            { time: ["মধ্যরাত", data.Midnight] },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // this.getLocation();
  }
  // getLocation() {
  //   location.get((err, position) => {
  //     if (err) {
  //       this.getLocationFromGoogle(this.state.term);
  //       console.log("Automatic Data couldn't be able to detect");
  //     } else {
  //       const location = {
  //         lat: position.coords.latitude,
  //         long: position.coords.longitude,
  //         // lat: 23.897144493916453,
  //         // long: 89.11046038653564,
  //         timestamp: position.timestamp,
  //       };
  //       this.setState({ location });
  //       this.getTimings(this.state.location);
  //     }
  //   });
  // }

  // getLocationFromGoogle(dep) {
  //   if (!this.state.term) {
  //     return false;
  //   }
  //   const reURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${dep}&key=${GOOGLE_API_KEY}`;
  //   axios
  //     .get(reURL)
  //     .then((response) => {
  //       // console.log(response);
  //       const getTime = new Date().getTime();
  //       const glocation = response.data.results[0].geometry.location;
  //       const location = {
  //         lat: glocation.lat,
  //         long: glocation.lng,
  //         timestamp: getTime,
  //       };
  //       this.setState({ location });
  //       this.getTimings(this.state.location);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // getTimings({ lat, long, timestamp }) {
  //   const time = Math.round(timestamp / 1000);
  //   axios
  //     .get(
  //       `//api.aladhan.com/v1/timings/${time}?latitude=${lat}&longitude=${long}`
  //     )
  //     .then((response) => {
  //       // console.log(response);
  //       const data = response.data.data.timings;
  //       this.setState({
  //         prayerTime: [
  //           { time: ["সেহরী শেষ", data.Imsak] },
  //           { time: ["ফজর", data.Fajr] },
  //           { time: ["সূর্যোদয়", data.Sunrise] },
  //           { time: ["জোহর", data.Dhuhr] },
  //           { time: ["আছর", data.Asr] },
  //           { time: ["সূর্যাস্ত", data.Sunset] },
  //           { time: ["মাগরিব", data.Maghrib] },
  //           { time: ["এশা", data.Isha] },
  //           { time: ["মধ্যরাত", data.Midnight] },
  //         ],
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  render() {
    return (
      <section>
        <div className="w-100 position-relative">
          <div className="container">
            <div className="time-wrap3 overlap2589 overlap-60 position-relativ w-100">
              <Contents prayerTime={this.state.prayerTime} />
              {/* <div className="sec-title text-center w-100 mt-3">
              <div className="sec-title-inner d-inline-block">
                <h2 className="mb-0 text-dark">Today's Prayer Times</h2>
                <p className="mb-0 thm-clr">
                  Islamic: , 9 Shawwal 1441 AH - Monday, June 1, 2020
                </p>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
