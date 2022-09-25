import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className=" text-center topbarpt">
          <h1
            className="text-bold"
            style={{
              fontSize: "150px",
              fontWeight: "bold",
            }}
          >
            404
          </h1>
          <h5
            style={{
              fontSize: "80px",
            }}
          >
            Not Found
          </h5>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
