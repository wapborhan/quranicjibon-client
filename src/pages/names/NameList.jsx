import Icon from "@/components/shared/Icon";
import React from "react";

const NameList = ({ name }) => {
  return (
    <div className="w-full p-5 group cursor-pointer bg-white flex justify-between items-center space-x-4 rounded-2xl transition-all duration-500 dark:bg-darks dark:text-dark-text">
      <div className="w-full flex justify-between items-center">
        <div className="frist">
          <p className=" font-medium">উচ্চারণ - {name?.name_bn}</p>
          <p className="text-gray-500 text-sm dark:text-gray-300">
            অর্থ - {name?.meaning_bn}
          </p>
        </div>
        <div className="second">
          <p className="text-gray-500 group-hover:text-[#2b9e76] text-2xl dark:text-gray-300 font-kfgq">
            {name?.name_ar}
          </p>
        </div>
      </div>
      <div className="w-16">
        <div className="flex  justify-center items-center  w-12 h-12">
          <Icon title={name?.id} />
        </div>
      </div>
    </div>
  );
};

export default NameList;
