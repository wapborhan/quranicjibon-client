import Link from "next/link";

const Pillar = () => {
  return (
    <section>
      <div className="w-full black-layer opc1 relative">
        <div
          className="fixed-bg"
          style={{
            backgroundImage: `url("/assets/images/sec-bg2.jpg")`,
          }}
        ></div>
        <div className="quote-pillars-wrap w-full">
          <div className="grid lg:grid-cols-2 grid-cols-1 mrg">
            <div className="col-md-12 col-sm-12 col-lg-5">
              <div className="quote-wrap flex items-end justify-center relative w-full">
                <div
                  className="fixed-bg"
                  style={{
                    backgroundImage: `url("/assets/images/quote-sec-bg.jpg")`,
                  }}
                ></div>
                <div className="quote-box relative thm-layer opc5 w-full">
                  <div
                    className="fixed-bg patern-bg back-blend-multiply thm-bg"
                    style={{
                      backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
                    }}
                  ></div>
                  <p className="mb-0">
                    মুহাম্মদ ইবনু আবদুল্লাহ ইবনু নু’মায়র আল হামদানী (রহঃ) ...
                    ইবনু উমর (রাঃ) থেকে বর্ণনা করেন। নবী সাল্লাল্লাহু আলাইহি
                    ওয়াসাল্লাম বলেছেন, ইসলামের বুনিয়াদ পাঁচটি বিষয়ের উপর
                    প্রতিষ্ঠিত। আল্লাহকে এক বলে বিশ্বাস করা, সালাত (নামায/নামাজ)
                    কায়েম করা, যাকাত দেয়া, রামাযানের রোযা পালন করা এবং হাজ্জ
                    (হজ্জ) করা। এক ব্যাক্তি (এ ক্রম পরিবর্তন করে) বলল, হাজ্জ করা
                    ও রামাযানের রোযা পালন করা। রাবী বললেন, না রামাযানের রোযা
                    পালন করা ও হাজ্জ করা এভাবে রাসুলুল্লাহ সাল্লাল্লাহু আলাইহি
                    ওয়াসাল্লাম থেকে শুনেছি।
                  </p>
                  <h4 className="mb-0">কিতাবুল ঈমান (كتاب الإيمان) </h4>
                  <span className="d-block">
                    সহীহ মুসলিম (ইসলামিক ফাউন্ডেশন)
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 col-md-12 col-sm-12 col-lg-7">
              <div className="pillars-wrap2 px-8 w-full">
                <div className="sec-title v2 left-icon w-full">
                  <div className="sec-title-inner inline-block">
                    <i className="flaticon-rub-el-hizb thm-clr">
                      {/* <GiRubElHizb /> */}
                    </i>
                    <h2 className="mb-0">
                      <span>ইসলামের স্তম্ভ</span>
                    </h2>
                    <p className="mb-0">
                      ইসলাম ধর্মে পাঁচটি স্তম্ভ আছে । এই পাঁচটি বিষয়ের উপর দৃঢ়
                      বিশ্বাস স্থাপন করা প্রত্যেক মুসলমানের জন্য ফরজ। একই সাথে
                      প্রথম তিনটির উপর আমল করা সকল মুসলমানের জন্য ফরজ এবং শেষ
                      দুটি সামর্থ্য অনুযায়ী আদায় করা ফরজ বা অবশ্য পালনীয় কাজ।
                    </p>
                  </div>
                </div>
                <ul className="pillars-list2 flex !px-8 flex-wrap mb-0 list-unstyled">
                  <li>
                    <div className="pillar-box2 relative w-100">
                      <span className="d-inline-block thm-clr">
                        {/* <FaQuran /> */}
                        <i className="flaticon-quran-1"></i>
                      </span>
                      <Link href="/pages/kalema">
                        <h3 className="mb-0">কালিমা</h3>
                        <i className="d-block thm-clr">Faith</i>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="pillar-box2 relative w-100">
                      <span className="d-inline-block thm-clr">
                        {/* <FaMosque /> */}
                        <i className="flaticon-mosque-1"></i>
                      </span>{" "}
                      <Link href="/">
                        <h3 className="mb-0">সালাত</h3>
                        <i className="d-block thm-clr">Prayer</i>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="pillar-box2 relative w-100">
                      <span className="d-inline-block thm-clr">
                        {/* <FaStarOfDavid /> */}
                        <i className="flaticon-star"></i>
                      </span>
                      <Link href="/">
                        <h3 className="mb-0">সাওম</h3>
                        <i className="d-block thm-clr">Restrained</i>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="pillar-box2 relative w-100">
                      <span className="d-inline-block thm-clr">
                        {/* <GiPayMoney /> */}
                        <i className="flaticon-gift-box"></i>
                      </span>
                      <Link href="/">
                        <h3 className="mb-0">যাকাত</h3>
                        <i className="d-block thm-clr">Almsgiving</i>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="pillar-box2 relative w-100">
                      <span className="d-inline-block thm-clr">
                        {/* <FaKaaba /> */}
                        <i className="flaticon-kaaba"></i>
                      </span>
                      <Link href="/">
                        <h3 className="mb-0">হজ্জ্ব</h3>
                        <i className="d-block thm-clr">Pilgrimage</i>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="pillar-btn">
                      {/* <a className="thm-btn thm-bg" href="about.html" title="">
                        আরও জানুন<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </a> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillar;
