import React, { Component } from "react";
import BottomIMG from "../../assets/images/sec-botm-mckp2.png";

import BlogList from "./BlogList";
const BlogData = [
  {
    id: 1,
    date: "",
    title: "",
    img: "",
    author: "",
    comment: "",
  },
  {
    id: 2,
    date: "",
    title: "",
    img: "",
    author: "",
    comment: "",
  },
  {
    id: 3,
    date: "",
    title: "",
    img: "",
    author: "",
    comment: "",
  },
];

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: BlogData,
    };
  }
  render() {
    return (
      <section>
        <div className="w-100 pt-90 pb-235 position-relative">
          <img
            className="sec-btm-mckp img-fluid position-absolute"
            src={BottomIMG}
            alt="Sec Bottom Mockup"
          />
          <div className="container">
            <div className="sec-title text-center w-100">
              <div className="sec-title-inner d-inline-block">
                <i className="flaticon-rub-el-hizb thm-clr"></i>
                <h2 className="mb-0">Recent News & Updates</h2>
              </div>
            </div>
            <div className="blog-wrap res-row w-100">
              <BlogList news={this.state.data} />
            </div>
            <div className="view-more d-inline-block text-center w-100">
              <a className="thm-btn mini-btn thm-bg" href="blog.html" title="">
                আরও<span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
