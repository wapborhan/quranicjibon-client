import React, { Component } from "react";
import "./about.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaGlobeAsia,
  FaLinkedinIn,
  FaCodepen,
} from "react-icons/fa";

export default class index extends Component {
  render() {
    return (
      <div id="page" className="topbarpt">
        <div className="cards">
          <div className="half half-left">
            <div className="img-container">
              <img
                src="https://avatars.githubusercontent.com/u/68281712?v=4"
                alt=""
              />
            </div>
          </div>
          <div className="half half-right">
            <a href="" className="online">
              online
            </a>
            <h2 className="name">Borhan Uddin</h2>
            <p>Front-End Developer</p>
            <h3 className="bio">Bio</h3>
            <p>
              Hi, this is Borhan Uddin have over 3 years of experience in
              Website Development.
              <br />
              <br />
              I like working with JavaScript. Therefore I use React JS to make
              stunning UI. I am ready to work with honesty, dedication,
              sincerity, and confidence to adapt to any situation to achieve my
              purpose.
              <br />
            </p>
            <h3 className="location">Location</h3>
            <p>Bheramara, Kushtia, Khulna</p>
            <a href="https://wapborhan.com/#contacts">
              <button>Message</button>
            </a>
          </div>
          <div className="triangle">
            <ul>
              <li>
                <a
                  href="http://www.facebook.com/wapborhan"
                  className="fa fa-facebook"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="http://www.twitter.com/wapborhan"
                  className="fa fa-twitter"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="http://www.github.com/wapborhan"
                  className="fa fa-skype"
                >
                  <FaGithub />
                </a>
              </li>

              <li>
                <a
                  href="http://www.linkedin.com/in/wapborhan"
                  className="fa fa-instagram"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="http://www.codepen.io/wapborhan"
                  className="fa fa-snapchat-ghost"
                >
                  <FaCodepen />
                </a>
              </li>
            </ul>
          </div>
          <a href="http://www.wapborhan.com" className="fa fa-plus">
            <FaGlobeAsia />
          </a>
        </div>
      </div>
    );
  }
}
