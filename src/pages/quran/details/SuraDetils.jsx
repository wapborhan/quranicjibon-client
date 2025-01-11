"use client";
import bengaliNumerals from "@/components/shared/bengaliNumerals";
import Icon from "@/components/shared/Icon";
import { toBengaliNumber } from "bengali-number";
import Image from "next/image";

const SuraDetils = ({ ayahs, sura, loading }) => {
  return (
    <>
      {loading ? (
        <div className="hidden animate-pulse h-[80px] w-full md:grid lg:grid-cols-3 items-center  bg-white border-b-2 rounded-t-2xl text-black dark:text-dark-text dark:bg-darks dark:border-gray-500 border-gray-200">
          <div className="bg-gray-200 h-12 w-12"></div>
          <div className="text-sm text-center">
            <div className="h-4 bg-gray-200 w-10/12 full"></div> <br />
            <div className="h-4 bg-gray-200 w-10/12 full"></div>{" "}
          </div>
          <div className="text-sm text-center">
            <div className="h-4 bg-gray-200 w-10/12 full"></div> <br />{" "}
            <div classname="h-4 bg-gray-200 w-10/12 full"></div>
          </div>
        </div>
      ) : (
        <div className="hidden  px-4 pt-4 w-full md:grid lg:grid-cols-3 items-center  bg-white border-b-2 rounded-t-2xl text-black dark:text-dark-text dark:bg-darks dark:border-gray-500 border-gray-200">
          {sura.type === "Meccan" ? (
            <Image
              src="/assets/images/quran/makkah_dark.png"
              alt=""
              width={100}
              height={100}
            />
          ) : (
            <Image
              src="/assets/images/quran/madinah.png"
              alt=""
              width={100}
              height={100}
            />
          )}

          <div className="text-sm text-center block space-y-1">
            <div className="text-xl font-bold font-kfgq">{sura?.name} </div>
            <div className="font-HindSiliguri">{sura?.name_bn}</div>
          </div>
          <div className="text-sm text-center block space-y-1">
            <div>{sura?.name_en}</div>
            <div>
              {bengaliNumerals(sura.index)} {" আয়াত"}
            </div>
          </div>
        </div>
      )}
      <div className="h-[cal(100%-52px)] md:px-4 overflow-y-auto space-y-2  pt-6 md:pt-0 pb-2 md:mt-0 dark:px-2 mb-2">
        <div
          // onClick={() => setMenu(!menu)}
          className="md:hidden p-4 flex items-center space-x-2 bg-white rounded-xl cursor-pointer dark:bg-darks"
        >
          {/* <AiOutlineMenu size={20} /> */}A
          <span className="text-xl">{sura?.name}</span>
        </div>
        <div className="space-y-2 ">
          {ayahs &&
            ayahs.map((ayah) => {
              return (
                <>
                  <div
                    key={ayah._id}
                    className={`w-full dark:text-dark-text p-5 group  bg-white  flex justify-between  gap-5 space-x-4 md:space-x-2 items-start border-gray-100 dark:border-gray-0 border-[0.3px] dark:border-[0px] rounded-xl md:hover:rounded-xl transition-all duration-500 dark:bg-darkz shadow-sm ${
                      loading && "animate-pulse"
                    }`}
                  >
                    <div className="w-full space-y-5 items-center md:flex-row justify-between">
                      <p className="text-dark-text text-right text-2xl dark:!text-white font-kfgq">
                        {loading ? (
                          <div className="h-4 bg-gray-200 w-10/12 ml-auto full"></div>
                        ) : (
                          <>
                            {ayah?.uthmani}{" "}
                            <span className="font-kfgq mr-3">
                              {parseInt(ayah.ayah_id).toLocaleString("ar-EG")}
                            </span>
                          </>
                        )}
                      </p>
                      {loading ? (
                        <div className="h-4 bg-gray-200 w-10/12 full"></div>
                      ) : (
                        <p className=" font-medium">{ayah?.text}</p>
                      )}

                      <br />
                    </div>
                    {/* <div className="w-16">
                    <Icon title={ayah?.ayah_id} />
                  </div> */}
                  </div>
                </>
              );
            })}
        </div>
      </div>{" "}
      {/* {menu &&
            <Menu {...{ name, menu, setMenu, state, setState, page, handleChange }} />
        } */}
    </>
  );
};

export default SuraDetils;
