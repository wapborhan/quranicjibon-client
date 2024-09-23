"use client";
import Icon from "@/components/shared/Icon";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";

const SideContentList = ({ suras }) => {
  const suraRefs = useRef([]); // To hold refs for each sura
  const router = useRouter();
  const searchParams = useSearchParams();
  const suraId = searchParams.get("id");
  useEffect(() => {
    // Get the 'id' query from the URL

    if (suraId && suraRefs.current[suraId - 1]) {
      // Scroll the corresponding sura into view based on the query id
      suraRefs.current[suraId - 1].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [searchParams, suraId]);

  const handleSuraClick = (sura, index) => {
    // Navigate to the sura and update the URL with the sura id
    router.push(`/quran/sura?id=${sura.index}`);

    // Scroll the clicked sura into view
    if (suraRefs.current[index]) {
      suraRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="space-y-1">
      {suras &&
        suras.map((sura, index) => {
          const isActive = suraId ? suraId === sura.index : false;

          return (
            <div
              key={sura._id}
              onClick={() => handleSuraClick(sura, index)} // Handle sura click
              ref={(el) => (suraRefs.current[index] = el)} // Assign ref to each sura item
              className={`w-full p-5 group cursor-pointer flex justify-between items-center space-x-3 rounded-2xl transition-all duration-500 dark:text-gray-300 dark:border-0 border-2 border-slate-100 ${
                isActive
                  ? "dark:bg-[#2c2c2c] border-2 border-slate-800 bg-[#ebfcf6]"
                  : "dark:bg-darkz"
              }`}
            >
              <div className="flex justify-center items-center w-12 h-12">
                <Icon title={sura?.index} active={isActive} />
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="first">
                  <p className="group-hover:text-[#2b9e76] font-HindSiliguri font-medium">
                    {sura?.name_bn}
                  </p>
                  <p className="text-gray-500 text-sm dark:text-gray-300">
                    {sura?.name_en}
                  </p>
                </div>
                <div className="second">
                  <p className="text-gray-500 text-base dark:text-gray-300 font-kfgq">
                    {sura?.name}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SideContentList;
