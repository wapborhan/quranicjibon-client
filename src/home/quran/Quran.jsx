import Image from "next/image";
import Link from "next/link";
import React from "react";
import List from "./List";

const Quran = ({ suras }) => {
  return (
    <section className="w-full pt-100  pb-100 opacity-100 relative">
      <div
        className="fixed-bg bg-cover"
        // style="background-image: url('your-secBG-image-path')"
        style={{
          backgroundImage: `url("/assets/images/sec-bg2.jpg")`,
        }}
      ></div>
      <div
        className="hlf-bg thm-layer opc6 pattern-bg back-blend-multiply bg-thm absolute thm-bg"
        style={{
          backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
        }}
      ></div>
      <div className="container mx-auto px-8">
        <div className="learn-wrap w-full">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="col-span">
              <div className="learn-img w-full">
                <Image
                  height={250}
                  width={300}
                  className="lg:w-10/12 w-full h-auto"
                  src="/assets/images/resources/learn-img.jpg"
                  alt="Learn Image"
                />
              </div>
            </div>
            <div className="col-span">
              <div className="learn-inner w-full">
                <div className="learn-top flex flex-wrap items-center justify-between w-full">
                  <div className="learn-top-inner ">
                    <h3 className="mb-0 text-white  font-HindSiliguri ">
                      <i className="flaticon-rub-el-hizb">
                        {/* <GiRubElHizb /> */}
                      </i>
                      আল কুরআন (সুরা ক্রমে)
                    </h3>
                  </div>
                  <div className="learn-top-inner">
                    <Link href="/quran" className="text-decoration-none">
                      সম্পূর্ণ কুরআন
                      <i className="fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </div>
                <List suras={suras} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quran;
