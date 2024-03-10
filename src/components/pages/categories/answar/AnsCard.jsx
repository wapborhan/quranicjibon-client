import Link from "next/link";
import React from "react";
import { CiRead } from "react-icons/ci";

const AnsCard = () => {
  return (
    <Link href="answer/1">
      <div style={{ opacity: "1", transform: "none" }}>
        <div className="xs-max:py-4 sm:py-2 md:py-2 md-max:bg-white dark:bg-hadith-dark-card group cursor-pointer h-full border-b border-solid  border-[#f6f7f7] rounded-xl md-max:border-transparent lg-min:dark:border-b-dark-cat-border md-max:dark:hover:bg-darkchapter-list-hover md-max:mb-4">
          <div class="lg-min:py-2 flex items-center h-full lg-min:bg-white lg-min:dark:bg-transparent lg-min:hover:bg-[#ebfcf6] dark:lg-min:hover:bg-[#2E2E2E] rounded-[0.70rem] gap-6 w-full px-6  xss:px-3 xs:px-3 ">
            <div
              class="
               flex items-center justify-center relative"
            >
              <h3 class="text-gray-400 dark:text -hadith-deepoffwhite group-hover:text-white style-Kalpurush absolute md-max:text-base text-xl font-medium  dark:text -hadith-deepoffwhite group-hover:opacity-100  xl:text-lg">
                ১
              </h3>
              <svg
                class="hover:fill-subcat-hover fill-[#f1f5f4] dark:fill-dark-bg-lite group-hover:fill-subcat-hover w-10"
                width="56"
                height="62"
                viewBox="0 0 56 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <div class="flex flex-row items-center justify-between xs-max:gap-2 w-full xs-max:flex-col xs-max:items-start ">
              <div class="sm-min:w-8/12 leading-6 style-Kalpurush-chapter text-lg  text-hadith-black dark:text-hadith-deepoffwhite group-hover:text-primary xs-max:w-full">
                আমলের ফযিলত
              </div>
              <div class="style-Kalpurush-webKit xs-max:text-sm leading-6 text-numbering dark:text-dark-text-subtitle group-hover:text-primary">
                <div class="flex gap-4 min-w-fit justify-end">
                  <span>
                    <span>৬০ </span> বার পঠিত
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnsCard;
