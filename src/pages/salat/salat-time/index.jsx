import React, { Fragment, PureComponent } from "react";
import { withRouter } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";
import Parser from "html-react-parser";
import {
  AJAX_PUBLIC_REQUEST,
  convertEnglishToBanglaNumber,
} from "../../Constants/AppConstants";

import * as Bootstrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcon from "@fortawesome/free-solid-svg-icons";

import ReactPlayer from "react-player";
import Duration from "../Common/Duration";
import { findDOMNode } from "react-dom";
import screenfull from "screenfull";
import classnames from "classnames";
import { Scrollbars } from "react-custom-scrollbars";
import moment from "moment";
// import localization from 'moment/locale/bn';

class NamazTiming extends PureComponent {
  scrollbars = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      district_loading: true,
      prayer_time_loading: true,
      allDistrict: [],
      todayPrayerTime: "",
      activeDistrict: "",
      defaultDistrict: "",
      activePrayerTiming: "",
      prayer_time_error: "",
    };
    document.title = "Prayer Time - Al Quran Technobd";
  }

  componentDidMount() {
    this.getDistricts();
    // console.log(convertEnglishToBanglaNumber("123"))
  }

  getDistricts = () => {
    this.setState({ district_loading: true });
    AJAX_PUBLIC_REQUEST("POST", "api/getDistricts", {}).then((results) => {
      if (results.type === "success") {
        const allDistrict = results.data;
        this.setState({
          allDistrict: allDistrict,
          district_loading: false,
        });
        if (allDistrict.length > 0) {
          const first_District = allDistrict[0];
          if (first_District && first_District.district_id) {
            this.setState({
              activeDistrict: first_District,
              defaultDistrict: first_District.district_id,
            });
            this.getDistrictData(first_District.lat, first_District.lon);
          }
        }
      } else {
        this.setState({
          error: Parser(
            "<p classNameName='text-danger'>" + results.error + "</p>"
          ),
          district_loading: false,
        });
      }
    });
  };

  getDistrictData = (lat, lon) => {
    this.setState({ prayer_time_loading: true });
    let day = moment().format("D");
    let year = moment().format("Y");
    let latitude = lat;
    let longitude = lon;
    let timezonestring = "Asia/Dhaka";
    let method = 1;
    let school = 1;
    let month = moment().format("M");
    let url = `https://api.aladhan.com/v1/calendar?year=${year}&latitude=${latitude}&longitude=${longitude}&timezonestring=${timezonestring}&method=${method}&school=${school}&month=${month}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if ((res.status = "OK")) {
          const prayerTimeData = res.data;
          const todayPrayerTime = prayerTimeData[day - 1]
            ? prayerTimeData[day - 1]
            : "";
          if (todayPrayerTime.hasOwnProperty("timings")) {
            this.setState({
              todayPrayerTime: todayPrayerTime,
              activePrayerTiming: todayPrayerTime.timings,
              prayer_time_loading: false,
            });
          }
        } else {
          this.setState({
            activePrayerTiming: "",
            prayer_time_loading: false,
            prayer_time_error: "Something Went Wrong",
          });
        }
      });
  };

  formatPrayerTime = (time, is_bn = true, exploaded_time = false) => {
    const res = time.split(" ");
    if (res.length > 0) {
      const exact_time = res[0];
      if (exploaded_time) {
        return exact_time;
      }
      // moment.updateLocale('bn', localization);
      const ex_time = moment(exact_time, "HH:mm").format("h:mm");
      if (is_bn) {
        return convertEnglishToBanglaNumber(ex_time);
      } else {
        return ex_time;
      }
    } else {
      return "--:--";
    }
  };

  changeHandler = async (e) => {
    this.setState({
      prayer_time_loading: true,
      defaultDistrict: e.target.value,
    });
    const activeDistrict = await this.state.allDistrict.filter(
      (allDistrict_single, index) => {
        return allDistrict_single.district_id == e.target.value;
      }
    );
    if (activeDistrict.length > 0) {
      this.setState({ activeDistrict: activeDistrict[0] });
      this.getDistrictData(activeDistrict[0].lat, activeDistrict[0].lon);
    }
  };

  render() {
    // let current_wakth = 'Fajr';
    // if (this.state.activePrayerTiming != "") {
    //     if (moment(this.formatPrayerTime(this.state.activePrayerTiming.Isha, false, true), "HH:mm").isBefore(moment("HH:mm"))) {
    //         current_wakth = 'Isha'
    //     } else if (moment(this.formatPrayerTime(this.state.activePrayerTiming.Maghrib, false, true), "HH:mm").isBefore(moment("HH:mm"))) {
    //         current_wakth = 'Maghrib'
    //     } else if (moment(this.formatPrayerTime(this.state.activePrayerTiming.Sunset, false, true), "HH:mm").isBefore(moment("HH:mm"))) {
    //         current_wakth = 'Sunset'
    //     } else if (moment(this.formatPrayerTime(this.state.activePrayerTiming.Asr, false, true), "HH:mm").isBefore(moment("HH:mm"))) {
    //         current_wakth = 'Asr'
    //     } else if (moment(this.formatPrayerTime(this.state.activePrayerTiming.Dhuhr, false, true), "HH:mm").isBefore(moment("HH:mm"))) {
    //         current_wakth = 'Dhuhr'
    //     } else if (moment(this.formatPrayerTime(this.state.activePrayerTiming.Sunrise, false, true), "HH:mm").isBefore(moment("HH:mm"))) {
    //         current_wakth = 'Sunrise'
    //     } else {
    //         current_wakth = 'Fajr'
    //     }
    // }
    // console.log('current_wakth', current_wakth)

    return (
      <Fragment>
        <div
          className="row wow mlr-2-5 fadeInUp"
          data-wow-duration="500ms"
          data-wow-delay="900ms"
        >
          <div className="col-md-1"></div>
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 plr-2-5">
            <div className="namaz-timing-sellect">
              <div className="para-title">নামাজের সময়সূচী</div>
              <div className="custom-select-option" style={{ width: "200px" }}>
                {this.state.district_loading ? (
                  <div className="loading district-loading">
                    {" "}
                    <i class="fas fa-spinner fa-spin"></i>{" "}
                  </div>
                ) : (
                  <select
                    onChange={(e) => this.changeHandler(e)}
                    class="select-css"
                    value={this.state.defaultDistrict}
                  >
                    {this.state.allDistrict.length > 0
                      ? this.state.allDistrict.map(
                          (allDistrict_single, index) => {
                            return (
                              <option
                                key={`district_${allDistrict_single.district_id}`}
                                value={allDistrict_single.district_id}
                              >
                                {allDistrict_single.district_name_bn}
                              </option>
                            );
                          }
                        )
                      : ""}
                  </select>
                )}
              </div>
            </div>

            <div className="namaz-timing">
              <div className="namaz-timing-heading">
                <span>নামায</span>
                <span>সময়</span>
              </div>
              {this.state.prayer_time_loading || this.state.district_loading ? (
                <div className="loading section-loading">
                  {" "}
                  <i class="fas fa-spinner fa-spin"></i>{" "}
                </div>
              ) : (
                <div className="nano">
                  <div className="nano-content">
                    <div className="para-item">
                      <Scrollbars
                        className="CusScrollbars"
                        id="CusScrollbars"
                        autoHide
                        autoHideTimeout={1000}
                        autoHideDuration={200}
                        style={{ height: "100%" }}
                        ref={this.scrollbars}
                      >
                        <ul>
                          {/* <li className="sellect"> */}
                          <li>
                            <div className="namaz-name">ফজর</div>
                            <div className="namaz-time">
                              {this.state.activePrayerTiming.Fajr
                                ? this.formatPrayerTime(
                                    this.state.activePrayerTiming.Fajr
                                  )
                                : "--:--"}
                            </div>
                          </li>
                          <li>
                            <div className="namaz-name">সূর্যোদয়</div>
                            <div className="namaz-time">
                              {this.state.activePrayerTiming.Sunrise
                                ? this.formatPrayerTime(
                                    this.state.activePrayerTiming.Sunrise
                                  )
                                : "--:--"}
                            </div>
                          </li>
                          <li>
                            <div className="namaz-name">যোহর</div>
                            <div className="namaz-time">
                              {this.state.activePrayerTiming.Dhuhr
                                ? this.formatPrayerTime(
                                    this.state.activePrayerTiming.Dhuhr
                                  )
                                : "--:--"}
                            </div>
                          </li>
                          <li>
                            <div className="namaz-name">আসর</div>
                            <div className="namaz-time">
                              {this.state.activePrayerTiming.Asr
                                ? this.formatPrayerTime(
                                    this.state.activePrayerTiming.Asr
                                  )
                                : "--:--"}
                            </div>
                          </li>
                          <li>
                            <div className="namaz-name">সূর্যাস্ত</div>
                            <div className="namaz-time">
                              {this.state.activePrayerTiming.Sunset
                                ? this.formatPrayerTime(
                                    this.state.activePrayerTiming.Sunset
                                  )
                                : "--:--"}
                            </div>
                          </li>
                          <li>
                            <div className="namaz-name">মাগরিব</div>
                            <div className="namaz-time">
                              {this.state.activePrayerTiming.Maghrib
                                ? this.formatPrayerTime(
                                    this.state.activePrayerTiming.Maghrib
                                  )
                                : "--:--"}
                            </div>
                          </li>
                          <li>
                            <div className="namaz-name">এশা</div>
                            <div className="namaz-time">
                              {this.state.activePrayerTiming.Isha
                                ? this.formatPrayerTime(
                                    this.state.activePrayerTiming.Isha
                                  )
                                : "--:--"}
                            </div>
                          </li>
                          <li>
                            <div className="namaz-name">ইমসাক</div>
                            <div className="namaz-time">
                              {this.state.activePrayerTiming.Imsak
                                ? this.formatPrayerTime(
                                    this.state.activePrayerTiming.Imsak
                                  )
                                : "--:--"}
                            </div>
                          </li>
                          <li>
                            <div className="namaz-name">মধ্যরাত</div>
                            <div className="namaz-time">
                              {this.state.activePrayerTiming.Midnight
                                ? this.formatPrayerTime(
                                    this.state.activePrayerTiming.Midnight
                                  )
                                : "--:--"}
                            </div>
                          </li>
                        </ul>
                      </Scrollbars>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div></div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(NamazTiming);
