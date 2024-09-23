import Link from "next/link";
import React from "react";

const List = ({ suras }) => {
  return (
    <div className="learn-post-wrap w-full">
      <div className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 lg:gap-10 gap-3">
        {suras &&
          suras.map((item, idx) => (
            <div className="col-md-6 " key={idx}>
              <div className="learn-post mb-2 flex flex-wrap items-center">
                <div className="learn-post-img">
                  {item.type === "Meccan" ? (
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
                  <Link
                    href={`/quran/sura/${item.index}`}
                    className="cursor-pointer"
                  >
                    <h4 className="mb-1">
                      <span className="text-white" title={item.name}>
                        {item.name}
                      </span>
                    </h4>
                  </Link>
                  <span className="block">{item.name_bn}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
