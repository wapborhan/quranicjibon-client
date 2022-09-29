import React from "react";
import PattBG from "../../assets/images/pattern-bg.jpg";
import CounterList from "./CounterList";

const index = () => {
  return (
    <section>
      <div class="w-100 pt-80 white-layer pb-50 opc9 position-relative">
        <div
          class="fixed-bg patern-bg back-blend-multiply white-bg"
          // style="background-image: url(assets/images/pattern-bg.jpg);"
          style={{
            backgroundImage: `url("${PattBG}")`,
          }}
        ></div>
        <div class="container">
          <div class="facts-wrap w-100">
            <CounterList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
