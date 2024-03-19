import React from "react";

const Settings = () => {
  return (
    <div class="2xl-min:bg-white 2xl-min:dark:bg-hadith-dark-card mb-6 p-5 rounded-xl xl-max:p-0">
      <div class="font-medium text-center text-2xl dark:text-dark-text">
        সেটিংস
      </div>
      সিগ্রই আসবে।
      {/* <div class="xl-max:mt-6">
        <div class="">
          <div class="style-Kalpurush dark:text-dark-text mt-4 mb-2 text-md">
            আরবি ফন্ট সিলেক্ট করুন
          </div>
          <div class="relative">
            <div class="w-full h-12 border border-solid border-[#ECEEF0] dark:border-transparent dark:bg-darkchapter-list-hover rounded-lg">
              <div class="px-4 py-3 flex items-center justify-between cursor-pointer">
                <div class=" text-sm text-black dark:text-hadith-deepoffwhite">
                  <div>
                    <img
                      class="hidden"
                      src="/assets/leftbar/fill/hover/book.svg"
                      alt=""
                    />
                    <p class="style-Kalpurush">KFGQ</p>
                  </div>
                </div>
                <img
                  class="dark:hidden"
                  src="/assets/sidebar/downarrow.svg"
                  alt=""
                />
                <img
                  class="dark:block hidden"
                  src="/assets/sidebar/downarrow-dark.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="hidden absolute  bg-white dark:bg-darkchapter-list-hover rounded-lg right-0 left-0 top-14 px-0 pt-3 shadow-2xl z-10">
              <div class="cursor-pointer text-[15px] flex flex-col px-2 pb-2">
                <div class="hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                  KFGQ
                </div>
                <div class="hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                  Me Quran
                </div>
                <div class="hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                  Al Mushaf
                </div>
                <div class="hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                  Amiri
                </div>
                <div class="hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                  Arial
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-4"></div>
        <div class="mt-3">
          <label
            class="style-Kalpurush text-md font-medium block dark:text-hadith-deepoffwhite my-2.5"
            for="translation"
          >
            এরাবিক ফন্ট সাইজ
          </label>
          <div
            class="mb-2 gap-3 w-full grid grid-cols-[86%,10%] place-items-center"
            name="translation"
          >
            <input
              type="range"
              min="18"
              max="40"
              value="25"
              // style="background-size: 31.8182% 100%;"
            />
            <div class="dark:text-dark-text">২৫</div>
          </div>
        </div>
        <div class="mt-3">
          <label
            class="style-Kalpurush text-md font-medium block dark:text-hadith-deepoffwhite my-2.5"
            for="translation"
          >
            অনুবাদ ফন্ট সাইজ
          </label>
          <div
            class="mb-2 gap-3 w-full grid grid-cols-[86%,10%] place-items-center"
            name="translation"
          >
            <input
              type="range"
              min="14"
              max="25"
              value="17"
              // style="background-size: 27.2727% 100%;"
            />
            <div class="dark:text-dark-text">১৭</div>
          </div>
        </div>
        <div class="rounded-lg">
          <div class="mt-6 setting-accordion-content">
            <div class="flex justify-between items-center">
              <div class="text-md style-Kalpurush dark:text-dark-text">
                নাইট মোড
              </div>
              <div>
                <button
                  class="bg-[#2b9e7640] relative inline-flex h-5 w-10 items-center rounded-full"
                  id="headlessui-switch-:r1:"
                  role="switch"
                  type="button"
                  tabindex="0"
                  aria-checked="true"
                  data-headlessui-state="checked"
                >
                  <span
                    aria-hidden="true"
                    class="translate-x-[21px] bg-hadith-button-background
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Settings;
