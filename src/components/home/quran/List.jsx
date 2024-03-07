import React from "react";

const List = () => {
  const suras = [
    { sura: "test", type: "ss", ar_name: "dsdsd", sura_name: "dsd" },
    { sura: "test", type: "ss", ar_name: "dsdsd", sura_name: "dsd" },
    { sura: "test", type: "ss", ar_name: "dsdsd", sura_name: "dsd" },
    { sura: "test", type: "ss", ar_name: "dsdsd", sura_name: "dsd" },
    { sura: "test", type: "ss", ar_name: "dsdsd", sura_name: "dsd" },
    { sura: "test", type: "ss", ar_name: "dsdsd", sura_name: "dsd" },
  ];
  return (
    <div className="learn-post-wrap w-full">
      <div className="flex flex-wrap">
        {suras.map((item, idx) => (
          <div className="col-md-6 col-sm-6 lg:col-span-6" key={idx}>
            <div className="learn-post mb-5 flex flex-wrap items-center">
              <div className="learn-post-img">
                <i>
                  {item.type === "মাক্কী" ? (
                    //  <FaKaaba />
                    <div className="gt">f</div>
                  ) : (
                    //  <FaMosque />
                    <div className="l">f</div>
                  )}
                </i>
              </div>
              <div className="learn-post-info">
                <h4 className="mb-0">
                  <a href="#" title={item.ar_name}>
                    {item.ar_name}
                  </a>
                </h4>
                <span className="d-block">{item.sura_name}</span>
                <a href="#" title="Download PDF">
                  Read
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
