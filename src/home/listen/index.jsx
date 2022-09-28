import React from "react";
import parallaxBG from "../../assets/images/parallax-bg5.jpg";
// import AudioCover from "../../assets/images/parallax-bg5.jpg";
import PattBG from "../../assets/images/pattern-bg.jpg";
import AudioPlayer from "react-h5-audio-player";

const index = () => {
  return (
    <section>
      <div class="w-100 pt-190 pb-120 position-relative">
        <div
          class="fixed-bg"
          style={{
            backgroundImage: `url("${parallaxBG}")`,
          }}
        ></div>
        <img
          class="img-fluid sec-top-mckp position-absolute"
          src="assets/images/sec-top-mckp5.png"
          alt="Sec Top Mockup 5"
        />
        <div class="container">
          <div class="about-wrap3 w-100">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-lg-5 order-lg-1">
                <div class="plyr-wrp v3 w-100">
                  <h3
                    class="mb-0 text-center pat-bg dark-layer2 opc5 back-blend-multiply bg-color1"
                    // style="background-image: url(assets/images/pattern-bg.jpg);"
                    style={{
                      backgroundImage: `url("${PattBG}")`,
                    }}
                  >
                    <span>কুরআন অডিও শুনুন</span>
                  </h3>
                  <div
                    class="plyr-inner w-100 pat-bg thm-layer opc65 back-blend-multiply thm-bg"
                    // style="background-image: url(assets/images/pattern-bg.jpg);"
                    style={{
                      backgroundImage: `url("${PattBG}")`,
                    }}
                  >
                    <div class="plyr v3 w-100">
                      <ul class="playlist mb-0 list-unstyled">
                        <li
                          // data-cover={AudioCover}
                          data-artist="(Abd-ur Rahman)"
                        >
                          <AudioPlayer
                            autoPlay
                            // src={AllahNames.path}
                            onPlay={(e) => console.log("onPlay")}
                            // showJumpControls={false}
                            showFilledProgress={false}
                            customVolumeControls={[]}
                            customAdditionalControls={[]}
                            defaultCurrentTime=" "
                            defaultDuration=" "
                            // layout="horizontal-reverse"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-7">
                <div class="about-inner3 w-100">
                  <span class="d-block thm-clr">
                    নৈতিক এবং নৈতিক বিশ্বাস যে গাইড
                  </span>
                  <h2 class="mb-0">
                    <span>স্বাগতম IslamBD তে </span>
                  </h2>
                  <p class="mb-0">
                    Donec id elit non mi porta gravida at eget metus. Fusce
                    dapibus, tellus ac cursus commodo, tortor mauris condimentum
                    nibh, ut fermentum massa justo sit amet risus. Nulla vitae
                    elit libero, a pharetra augue.Integer posue re erat a ante
                    venenatis dapibus posuere velit aliquet.
                  </p>
                  <p class="mb-0">
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Sed
                    posuere consectet ur est at lobortis. Donec sed odio dui.
                    Curabitur blandit tempus.
                  </p>
                  <a class="thm-btn bg-color1" href="about.html" title="">
                    Learn More<span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
