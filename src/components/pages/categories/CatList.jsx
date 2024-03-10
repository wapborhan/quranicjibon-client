import React, { Fragment } from "react";
import CatSearch from "./CatSearch";
import SingelCat from "./SingelCat";

const CatList = () => {
  return (
    <Fragment>
      <div className="col-start-1 category-bar w-[350px] lg-max:w-full">
        <div className="rounded-2xl h-[calc(100vh_-_130px)] bg-white dark:bg-hadith-dark-card flex items-center flex-col">
          <div class="border-b-[1px] lg-max:border-y-[1px] lg-max:dark:border-y-[1px] w-full flex items-center justify-center text-lg text-white border-[#ECEEF0] dark:border-dark-cat-border">
            <p
              class="bg-hadith-button-background
              } w-1/2 text-center py-3 cursor-pointer rounded-tl-2xl text-xl style-Kalpurush-webKit"
            >
              বই
            </p>
            <p
              class="bg-white dark:bg-hadith-dark-card text-black dark:text-hadith-deepoffwhite
              } text-xl style-Kalpurush-webKit w-1/2 text-center  py-3 cursor-pointer rounded-tr-xl"
            >
              অধ্যায়
            </p>
          </div>
          <div className="w-full h-[50px] category-bar">
            <CatSearch />
            <div className="pl-4 cat-scrl lg-max:h-[calc(100vh_-_300px)] lg-max:pb-10 lg-min:h-[calc(100vh_-_295px)] pr-1.5 mr-1.5 mt-4">
              <div className="flex gap-y-2 flex-col w-full">
                <SingelCat />
                <SingelCat />
                <SingelCat />
                <SingelCat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CatList;
