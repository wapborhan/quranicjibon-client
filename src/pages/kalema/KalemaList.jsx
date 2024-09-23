"use client"; // Make sure this is a client component
import Icon from "@/components/shared/Icon";
import { useRef } from "react";

const KalemaList = ({ kalemas, onDataSubmit }) => {
  const kalemaRefs = useRef([]); // To hold refs for each kalema

  const selectedKalemaHandler = (id, index) => {
    const kalema = kalemas.find((item) => item.id === id);
    onDataSubmit(kalema);

    // Scroll the selected kalema into view
    if (kalemaRefs.current[index]) {
      kalemaRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="space-y-1">
      {kalemas &&
        kalemas.map((kalema, index) => (
          <div
            onClick={() => selectedKalemaHandler(kalema.id, index)} // Pass the index to the handler
            key={kalema.id}
            ref={(el) => (kalemaRefs.current[index] = el)} // Assign ref to each kalema item
            className="w-full p-5 group cursor-pointer bg-white flex justify-between items-center space-x-3 rounded-2xl transition-all duration-500 dark:bg-darkz dark:text-gray-300 dark:border-0 border-2 border-slate-100"
          >
            <div className="">
              <div className="flex justify-center items-center w-12 h-12">
                <Icon title={kalema?.id} />
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="first">
                <p className="group-hover:text-[#2b9e76] font-HindSiliguri font-medium">
                  {kalema?.name}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default KalemaList;
