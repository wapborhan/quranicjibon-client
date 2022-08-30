import React from "react";
import ReactDOM from "react-dom";
import MainComponents from "./components/MainComponents";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/assets/stylesheet/styles.min.css";
import "./components/assets/stylesheet/custom.css";
import "./components/assets/fonts/font.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainComponents />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
