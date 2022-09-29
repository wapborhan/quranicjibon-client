import React from "react";
import PatterBG from "../../assets/images/pattern-bg.jpg";

const index = () => {
  return (
    <footer>
      <div class="w-100 pt-50 thm-layer pb-30 opc8 position-relative">
        <div
          class="fixed-bg patern-bg back-blend-multiply thm-bg"
          style={{
            backgroundImage: `url("${PatterBG}")`,
          }}
        ></div>
        <div class="container">
          <div class="footer-data v2 w-100">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-lg-12">
                <div class="widget text-center w-100">
                  <div class="widget-inner d-inline-block">
                    <div class="logo text-center">
                      <h1 class="mb-0">
                        <a href="#" title="Home">
                          {/* <img
                            class="img-fluid"
                            src="assets/images/logo.png"
                            alt="IslamBD"
                            srcset="assets/images/retina-logo.png"
                          /> */}
                          IslamBD
                        </a>
                      </h1>
                    </div>
                    <div class="mb-0 h5 text-center">
                      তোমরা আমার পক্ষ থেকে একটি আয়াত হলেও পৌঁছে দাও। <br /> -
                      জামে তিরমিযি।
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-bar2 text-center w-100">
            <p class="mb-0 text-center">
              IslamBD - Copyright 2022. Design by{" "}
              <a
                className="text-light"
                href="https://srdreamlab.com"
                title="SR Dream Lab"
                target="_blank"
              >
                SR Dream Lab
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
