import React from "react";
import { Link } from "react-router-dom";

const Breadcamp = () => {
  return (
    <div className="card mt-3 mb-4 pt-3 px-4">
      <nav aria-label="breadcrumb topbarpt">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item">
            <Link to="/qurbani">মূল পাতা</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/qurbani-question">প্রশ্ন সমূহ</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            উত্তর
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcamp;
