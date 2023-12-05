import React from "react";
import IMG from "../../assets/images/course-bg.jpg";

const BlogList = (props) => {
  return (
    <div className="row">
      {props.news.map((item) => {
        return (
          <div className="col-md-6 col-sm-6 col-lg-4" key={item.id}>
            <div className="post-box w-100 border pb-4 ">
              <div className="post-img overflow-hidden position-relative w-100">
                <a href="blog-detail.html" title="">
                  <img
                    className="img-fluid w-100 "
                    src={IMG}
                    alt="Blog Image 1"
                  />
                </a>
              </div>
              <div className="post-info position-relative w-100">
                <a className="thm-bg" href="blog-detail.html" title="">
                  <i className="fas fa-link"></i>
                </a>
                <span className="post-date thm-clr">July 30, 2020</span>
                <h3 className="mb-0">
                  <a href="blog-detail.html" title="">
                    American Muslim: Choosing to Remain Still This Ramadan
                  </a>
                </h3>
                <ul className="post-meta d-flex flex-wrap mb-0 list-unstyled">
                  <li>
                    <i className="fas fa-user-alt"></i>By:{" "}
                    <a href="javascript:void(0);" title="">
                      James Smith
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-comment-alt"></i>1 Comments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
