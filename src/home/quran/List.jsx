import React from "react";

const List = () => {
  const suras = [
    {
      sura: "test",
      type: "মাক্কী",
      ar_name: "سورة الفاتحة",
      sura_name: "আল ফাতিহা",
      icon: "flaticon-kaaba",
    },
    { sura: "test", type: "ss", ar_name: "dsdsd", sura_name: "dsd" },
    { sura: "test", type: "ss", ar_name: "dsdsd", sura_name: "dsd" },
    { sura: "test", type: "ss", ar_name: "dsdsd", sura_name: "dsd" },
    { sura: "test", type: "ss", ar_name: "dsdsd", sura_name: "dsd" },
    { sura: "test", type: "ss", ar_name: "dsdsd", sura_name: "dsd" },
  ];
  return (
    <div className="learn-post-wrap w-full">
      <div className="grid grid-cols-2 gap-10">
        {suras.map((item, idx) => (
          <div className="col-md-6 " key={idx}>
            <div className="learn-post mb-2 flex flex-wrap items-center">
              <div className="learn-post-img">
                {item.type === "মাক্কী" ? (
                  <>
                    <i className="flaticon-kaaba text-6xl text-[#0a993c]"></i>
                    {/* //  <FaKaaba /> */}
                  </>
                ) : (
                  //  <FaMosque />
                  <i className="flaticon-mosque-2  text-6xl text-[#0a993c]"></i>
                )}
              </div>
              <div className="learn-post-info">
                <h4 className="mb-1">
                  <a href="#" title={item.ar_name}>
                    {item.ar_name}
                  </a>
                </h4>
                <span className="block">{item.sura_name}</span>
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
