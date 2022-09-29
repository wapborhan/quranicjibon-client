import React from "react";
const list = [
  {
    id: 1,
    tittle: "Inspirational Sermons",
    count: "100",
  },
  {
    id: 2,
    tittle: "Inspirational Sermons",
    count: "200",
  },
  {
    id: 3,
    tittle: "Inspirational Sermons",
    count: "300",
  },
  {
    id: 4,
    tittle: "Inspirational Sermons",
    count: "400",
  },
];

const CounterList = () => {
  return (
    <div class="row">
      {list.map((item) => {
        return (
          <div class="col-md-4 col-sm-6 col-6 col-lg-3" key={item.id}>
            <div class="fact-box d-flex flex-wrap align-items-center w-100">
              <span class="rounded-circle">
                <i class="flaticon-mosque-3"></i>
              </span>
              <div class="fact-inner">
                <h3 class="mb-0 counter">{item.count}</h3>

                <h5 class="mb-0">{item.tittle}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CounterList;
