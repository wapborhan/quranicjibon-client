import React from "react";
import AnsCard from "./AnsCard";

const AnsList = () => {
  return (
    <div className="cat-scrl lg:h-[calc(100vh-190px)] xl-min:h-[calc(100vh-195px)] lg-min:bg-white lg-min:dark:bg-hadith-dark-card rounded-t-none rounded-b-xl w-full xss:mb-10 xss:rounded-xl xss:mt-4 xs:rounded-xl sm:rounded-xl  md:rounded-xl lg:rounded-xl scroll-mt-20">
      {/* <div class="w-full mb-4 mx-auto h-[1px] bg-[#F6F7F7] dark:bg-dark-cat-border"></div> */}

      <div className="pb-6 xss:mr-0">
        <div className="lg-min:pl-3 lg-min:bg-white lg-min:dark:bg-hadith-dark-card rounded-2xl w-full pb-5">
          <AnsCard />
          <AnsCard />
          <AnsCard />
          <AnsCard />
          <AnsCard />
          <AnsCard />
          <AnsCard />
          <AnsCard />
          <AnsCard />
          <AnsCard />
        </div>
      </div>
    </div>
  );
};

export default AnsList;
