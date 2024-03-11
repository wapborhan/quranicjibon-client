import Image from "next/image";
import React from "react";

const list = [
  {
    id: 1,
    tittle: "সূরা",
    count: "১১৪",
    icon: "/assets/images/counter/quran.png",
  },
  {
    id: 2,
    tittle: "আয়াত",
    count: "৬২৩৬",
    icon: "/assets/images/counter/ayath.png",
  },
  {
    id: 3,
    tittle: "রুকু ",
    count: "৫৪০",
    icon: "/assets/images/counter/ruku.png",
  },
  {
    id: 4,
    tittle: "মানজিল",
    count: "৭",
    icon: "/assets/images/counter/manjil.png",
  },
];

const CounterList = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-10">
      {list.map((item) => {
        return (
          <div className="col-md-4 col-sm-6 col-6 col-lg-3" key={item.id}>
            <div className="fact-box flex flex-wrap items-center w-full">
              <span className="rounded-full flex justify-center items-center">
                <Image width={50} height={50} src={item.icon} alt="" />
              </span>
              <div className="fact-inner">
                <h3 className="mb-0 counter">{item.count}</h3>

                <h4 className="mb-0">
                  <span>{item.tittle}</span>
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CounterList;
