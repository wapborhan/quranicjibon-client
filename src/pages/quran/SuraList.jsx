import Link from "next/link";
import Icon from "@/components/shared/Icon";
import bengaliNumerals from "@/components/shared/bengaliNumerals";
import { useRouter } from "next/navigation";

const SuraList = ({ sura }) => {
  const router = useRouter();

  const handleClick = (sura) => {
    router.push(`/quran/sura?id=${sura.index}`);
  };
  return (
    <div
      // href={`quran/sura/${sura?.index}`}
      onClick={() => handleClick(sura)}
      className="w-full p-5 group cursor-pointer bg-white flex justify-between items-center space-x-4 rounded-2xl transition-all duration-500 dark:bg-darks dark:text-dark-text"
    >
      <div className="w-16">
        <div className="flex justify-center items-center  w-12 h-12">
          <Icon title={sura?.index} />
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="frist">
          <p className="group-hover:text-[#2b9e76] font-HindSiliguri font-medium">
            {sura?.name_bn}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-300">
            {sura?.name_en}
          </p>
        </div>
        <div className="second">
          <p className="text-gray-500 text-2xl font-kfgq dark:text-gray-300">
            {sura?.name}
          </p>
          <p className="text-gray-500 text-md  dark:text-gray-300">
            {bengaliNumerals(sura?.ayas) + " আয়াত"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuraList;
